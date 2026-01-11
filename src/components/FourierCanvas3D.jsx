import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { dft } from '../lib/dft';

const FourierCanvas3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null); // Access scene from anywhere
  const timeRef = useRef(0);
  const instancesRef = useRef([]); // 2D와 동일한 멀티 인스턴스 관리
  const trailLineRef = useRef(null); 
  const [isAnimating, setIsAnimating] = useState(true);
  const [instances, setInstances] = useState([]); // Reactive state for UI

  // Settings State & Ref (2D와 최대한 일치)
  const [settings, setSettings] = useState({
    speed: 0.08,
    persistence: 2.0,
    pathWeight: 1.8,
    shapeScale: 1.0,
    cameraSpeed: 0.1,
    rotationSpeed: 0.0,    // Camera Self-Rotation (Roll)
    epicycles: 0,
    zoom: 100,
    spread: 600,         // Spatial Spread (2D와 동일)
    delay: 0.5,          // Adjusted for 3D responsiveness
    displayDuration: 1.0
  });
  const settingsRef = useRef(settings);

  // Sync ref
  useEffect(() => { settingsRef.current = settings; }, [settings]);

  // Generators
  const generateTrefoilKnot = (N = 512, scale = 120) => {
    const points = [];
    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 2;
      const x = (Math.sin(t) + 2 * Math.sin(2 * t)) / 3;
      const y = (Math.cos(t) - 2 * Math.cos(2 * t)) / 3;
      const z = (-Math.sin(3 * t)) / 3;
      points.push(new THREE.Vector3(x * scale, y * scale, z * scale));
    }
    return points;
  };

  const generateLissajous3D = (N = 512, scale = 120) => {
    const points = [];
    // 3D Lissajous Parameters: a=3, b=2, c=5 (Complex Knot)
    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 2;
      const x = scale * Math.sin(3 * t + Math.PI / 2); // 2D component
      const y = scale * Math.sin(2 * t);               // 2D component
      const z = scale * Math.sin(5 * t);               // 3D component (Depth)
      points.push(new THREE.Vector3(x, y, z));
    }
    return points;
  };

  // (2,5) Torus Knot - 복잡하고 아름다운 매듭
  const generateTorusKnot25 = (N = 512, scale = 120) => {
    const points = [];
    const p = 2, q = 5; // Torus Knot parameters
    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 2 * q; // Full loop
      const r = 3 + Math.cos(q * t / q * p); // Simplified radius
      const x = (scale * Math.cos(p * t / q) * (1 + 0.5 * Math.cos(q * t / q))) / 1.5;
      const y = (scale * Math.sin(p * t / q) * (1 + 0.5 * Math.cos(q * t / q))) / 1.5;
      const z = (scale * 0.5 * Math.sin(q * t / q)) / 1.5;
      points.push(new THREE.Vector3(x, y, z));
    }
    return points;
  };

  // Compute Fourier Point
  const computeFourierPoint = (fourier, t, phaseShift = 0, limit = 0) => {
    let val = 0;
    const N = limit > 0 ? Math.min(fourier.length, limit) : fourier.length;
    for (let i = 0; i < N; i++) {
      const { freq, amp, phase } = fourier[i];
      val += amp * Math.cos(freq * t + phase + phaseShift);
    }
    return val;
  };

  // Helper for cleanup
  const removeInstanceObjects = (inst) => {
    const scene = sceneRef.current;
    if (!scene || !inst.objects) return;
    const { trailLine, trailGeom, trailMat, seedLine, seedGeom, seedMat } = inst.objects;
    scene.remove(trailLine);
    scene.remove(seedLine);
    trailGeom.dispose();
    trailMat.dispose();
    seedGeom.dispose();
    seedMat.dispose();
  };

  const addInstance = (type) => {
    const scene = sceneRef.current;
    if (!scene) return;

    // 1. Generate Points
    // Normalize basic scale to around 150 for consistency
    const scale = 150 * settingsRef.current.shapeScale;
    let seedPoints = [];
    if (type === 'knot') seedPoints = generateTrefoilKnot(256, scale);
    else if (type === 'torusknot25') seedPoints = generateTorusKnot25(256, scale);
    else seedPoints = generateLissajous3D(256, scale);

    // 2. DFT
    const xSignal = seedPoints.map(p => ({ re: p.x, im: 0 }));
    const ySignal = seedPoints.map(p => ({ re: p.y, im: 0 }));
    const zSignal = seedPoints.map(p => ({ re: p.z, im: 0 }));
    const fX = dft(xSignal).sort((a, b) => b.amp - a.amp);
    const fY = dft(ySignal).sort((a, b) => b.amp - a.amp);
    const fZ = dft(zSignal).sort((a, b) => b.amp - a.amp);

    // 3. Create Objects
    const hue = Math.random() * 360;
    const color = new THREE.Color(`hsl(${hue}, 100%, 65%)`);
    
    const MAX_BUFFER = 10000;
    const trailGeom = new THREE.BufferGeometry();
    trailGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MAX_BUFFER * 3), 3));
    trailGeom.setDrawRange(0, 0); // Start empty to prevent default white dots at origin
    const trailMat = new THREE.LineBasicMaterial({ 
      color, 
      linewidth: 1, 
      transparent: true, 
      opacity: settingsRef.current.pathWeight / 5 
    });
    const trailLine = new THREE.Line(trailGeom, trailMat);
    trailLine.frustumCulled = false;
    scene.add(trailLine);

    const seedGeom = new THREE.BufferGeometry().setFromPoints(seedPoints);
    const seedMat = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2, transparent: true, opacity: 0.5 });
    const seedLine = new THREE.LineLoop(seedGeom, seedMat);
    
    // Position (Spatial Spread)
    const spread = settingsRef.current.spread;
    const center = {
      x: (Math.random() - 0.5) * spread,
      y: (Math.random() - 0.5) * spread,
      z: (Math.random() - 0.5) * (spread * 0.5) // Depth spread slightly tighter
    };
    seedLine.position.set(center.x, center.y, center.z);
    scene.add(seedLine);

    // 4. Instance Object
    const inst = {
      id: Date.now(),
      fX, fY, fZ,
      time: 0,
      trail: [],
      center,
      hue,
      reversed: Math.random() < 0.5, // 50% 확률로 반전된 회전 (2D와 동일)
      objects: {
        trailLine, trailGeom, trailMat,
        seedLine, seedGeom, seedMat
      },
      delayProgress: 0 // To handle Sequence Delay
    };

    // Auto-hide seed
    setTimeout(() => { seedLine.visible = false; }, settingsRef.current.displayDuration * 1000);

    // Add to ref and state
    if (instancesRef.current.length >= 20) {
       const toRemove = instancesRef.current[0];
       removeInstanceObjects(toRemove);
       instancesRef.current = instancesRef.current.slice(1);
    }

    instancesRef.current = [...instancesRef.current, inst];
    setInstances([...instancesRef.current]);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // 0. Cleanup and Reset for StrictMode
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    instancesRef.current = [];
    setInstances([]);

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020205); // Darker space
    sceneRef.current = scene;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 20000);
    camera.position.set(600, 400, 600); 
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // 4. Lights
    scene.add(new THREE.AmbientLight(0x404040, 3));
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(500, 500, 500);
    scene.add(pointLight);

    // 5. Initial Seed (2D와 일치시키기 위해 자동 시작)
    addInstance('lissajous');

    // 6. Animation Loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const s = settingsRef.current;

      // Update Instances
      instancesRef.current.forEach(inst => {
        // Handle Sequence Delay (simple version)
        if (inst.delayProgress < s.delay) {
          inst.delayProgress += 1/60; // 60fps approx
          return;
        }

        const baseDt = (Math.PI * 2) / inst.fX.length;
        const dt = (inst.reversed ? -1 : 1) * baseDt * s.speed;
        inst.time = (inst.time + dt + Math.PI * 2) % (Math.PI * 2);

        const limit = s.epicycles > 0 ? s.epicycles : inst.fX.length;
        const x = computeFourierPoint(inst.fX, inst.time, Math.PI / 2, limit);
        const y = computeFourierPoint(inst.fY, inst.time, Math.PI / 2, limit);
        const z = computeFourierPoint(inst.fZ, inst.time, Math.PI / 2, limit);
        
        const pos = new THREE.Vector3(x + inst.center.x, y + inst.center.y, z + inst.center.z);

        // Trail Update
        inst.trail.push(pos);
        const maxTrail = Math.floor(inst.fX.length * s.persistence);
        while (inst.trail.length > maxTrail) inst.trail.shift();

        const positions = inst.objects.trailGeom.attributes.position.array;
        const count = inst.trail.length;
        for (let i = 0; i < count; i++) {
          const p = inst.trail[i];
          positions[i * 3] = p.x;
          positions[i * 3 + 1] = p.y;
          positions[i * 3 + 2] = p.z;
        }
        inst.objects.trailLine.geometry.setDrawRange(0, count);
        inst.objects.trailLine.geometry.attributes.position.needsUpdate = true;
        
        // Update intensity (since WebGL doesn't support linewidth > 1)
        inst.objects.trailMat.opacity = s.pathWeight / 5;
      });

      // Camera Orbit
      if (s.cameraSpeed !== 0) {
        const camTime = Date.now() * 0.0005 * s.cameraSpeed;
        const radius = s.zoom === 0 ? 0.1 : s.zoom; // Use zoom value directly as distance
        camera.position.x = Math.cos(camTime) * radius;
        camera.position.z = Math.sin(camTime) * radius;
        // Float within a range proportional to the current radius
        camera.position.y = Math.sin(camTime * 0.5) * (Math.abs(radius) * 0.3) + (Math.abs(radius) * 0.5); 
        camera.lookAt(0, 0, 0);
      } else {
        camera.lookAt(0, 0, 0);
        const radius = s.zoom === 0 ? 0.1 : s.zoom;
        const dir = camera.position.clone().normalize();
        camera.position.copy(dir.multiplyScalar(radius));
      }

      // Self Rotation (Roll)
      if (s.rotationSpeed !== 0) {
        timeRef.current += 0.01 * s.rotationSpeed;
        camera.rotateZ(timeRef.current);
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      instancesRef.current.forEach(removeInstanceObjects);
      renderer.dispose();
    };
  }, []); // 2D와 동일: 한 번만 실행, 재실행 안 함

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {/* Three.js Container - explicitly low z-index */}
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
      
      {/* 3D UI Overlay - explicitly high z-index */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        zIndex: 9999,
        pointerEvents: 'none',
        textShadow: '0 0 10px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px', color: '#00f2ff' }}>3D ORACLE</h1>
        <p style={{ margin: 0, opacity: 0.8, fontWeight: 300 }}>
          Multi-instance harmonic synthesis (3D)
        </p>
      </div>

      {/* Settings Panel - explicitly high z-index */}
      <div style={{
        position: 'absolute',
        top: '60px',
        right: '20px',
        width: '280px',
        background: 'rgba(10, 10, 20, 0.85)',
        backdropFilter: 'blur(12px)',
        borderRadius: '16px',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        color: 'white',
        zIndex: 9999
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Visual Settings</h3>
        
        {/* 1. Detail (Epicycles) */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Geometric Detail</span>
            <span style={{ color: '#00f2ff' }}>{settings.epicycles}</span>
          </label>
          <input 
            type="range" min="1" max="256" step="1" 
            value={settings.epicycles}
            onChange={(e) => setSettings(prev => ({ ...prev, epicycles: parseInt(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 2. Flow Speed */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Flow Speed</span>
            <span style={{ color: '#00f2ff' }}>{settings.speed.toFixed(2)}x</span>
          </label>
          <input 
            type="range" min="0.01" max="0.5" step="0.01" 
            value={settings.speed}
            onChange={(e) => setSettings(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 3. Persistence */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Persistence</span>
            <span style={{ color: '#00f2ff' }}>{settings.persistence.toFixed(1)}x</span>
          </label>
          <input 
            type="range" min="0.5" max="5" step="0.1" 
            value={settings.persistence}
            onChange={(e) => setSettings(prev => ({ ...prev, persistence: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 4. Path Intensity (Weight substitute for 3D) */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Path Intensity</span>
            <span style={{ color: '#00f2ff' }}>{settings.pathWeight}</span>
          </label>
          <input 
            type="range" min="1" max="5" step="0.5" 
            value={settings.pathWeight}
            onChange={(e) => setSettings(prev => ({ ...prev, pathWeight: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 5. Shape Scale */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Shape Scale</span>
            <span style={{ color: '#00f2ff' }}>{(settings.shapeScale * 100).toFixed(0)}%</span>
          </label>
          <input 
            type="range" min="0.5" max="2" step="0.1" 
            value={settings.shapeScale}
            onChange={(e) => setSettings(prev => ({ ...prev, shapeScale: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 6. Spatial Spread */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Spatial Spread</span>
            <span style={{ color: '#00f2ff' }}>{settings.spread}px</span>
          </label>
          <input 
            type="range" min="0" max="2500" step="10" 
            value={settings.spread}
            onChange={(e) => setSettings(prev => ({ ...prev, spread: parseInt(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 7. Sequence Delay */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Sequence Delay</span>
            <span style={{ color: '#00f2ff' }}>{settings.delay.toFixed(1)}s</span>
          </label>
          <input 
            type="range" min="0" max="5" step="0.1" 
            value={settings.delay}
            onChange={(e) => setSettings(prev => ({ ...prev, delay: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 8. Seed Display Time */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Seed Display Time</span>
            <span style={{ color: '#00f2ff' }}>{settings.displayDuration.toFixed(1)}s</span>
          </label>
          <input 
            type="range" min="0.5" max="10" step="0.1" 
            value={settings.displayDuration}
            onChange={(e) => setSettings(prev => ({ ...prev, displayDuration: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 9. Orbit Speed */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Orbit Speed</span>
            <span style={{ color: '#00f2ff' }}>{settings.cameraSpeed.toFixed(1)}</span>
          </label>
          <input 
            type="range" min="-3" max="3" step="0.1" 
            value={settings.cameraSpeed}
            onChange={(e) => setSettings(prev => ({ ...prev, cameraSpeed: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 10. Camera Rotation Speed */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Camera Rotation Speed</span>
            <span style={{ color: '#00f2ff' }}>{settings.rotationSpeed.toFixed(1)}</span>
          </label>
          <input 
            type="range" min="-3" max="3" step="0.1" 
            value={settings.rotationSpeed}
            onChange={(e) => setSettings(prev => ({ ...prev, rotationSpeed: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 11. Zoom (Distance) */}
        <div style={{ marginBottom: '0' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Zoom (distance to origin)</span>
            <span style={{ color: '#00f2ff' }}>{settings.zoom}</span>
          </label>
          <input 
            type="range" min="-500" max="500" step="10" 
            value={settings.zoom}
            onChange={(e) => setSettings(prev => ({ ...prev, zoom: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>
      </div>

      {/* Pattern Selection - Bottom Buttons */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 9999
      }}>
        {[
          { id: 'random', name: 'Shuffle', emoji: '🎲' },
          { id: 'lissajous', name: 'Lissajous', emoji: '🌀' },
          { id: 'knot', name: 'Trefoil', emoji: '🪢' },
          { id: 'torusknot25', name: 'Torus', emoji: '🔮' }
        ].map(p => (
          <button
            key={p.id}
            onClick={() => {
              if (p.id === 'random') {
                const types = ['lissajous', 'knot', 'torusknot25'];
                addInstance(types[Math.floor(Math.random() * types.length)]);
              } else {
                addInstance(p.id);
              }
            }}
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s'
            }}
          >
            {p.emoji} {p.name}
          </button>
        ))}
        
        {/* Reset Button */}
        <button
          onClick={() => {
            instancesRef.current.forEach(removeInstanceObjects);
            instancesRef.current = [];
            setInstances([]);
          }}
          style={{
            background: 'rgba(255, 100, 100, 0.3)',
            border: '1px solid rgba(255, 100, 100, 0.5)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s'
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default FourierCanvas3D;
