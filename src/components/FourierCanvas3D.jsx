import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { dft } from '../lib/dft';

const FourierCanvas3D = () => {
  const mountRef = useRef(null);
  const timeRef = useRef(0);
  const trailRef = useRef([]);
  const trailLineRef = useRef(null); // For direct geometry access
  const [isAnimating, setIsAnimating] = useState(true);



  // Settings State & Ref
  const [settings, setSettings] = useState({
    pattern: 'lissajous', // Default to Lissajous as requested
    speed: 0.08,  // 2D와 동일한 범위
    persistence: 2.0,    // Trail length multiplier (x1000)
    pathWeight: 2,        // Line thickness
    shapeScale: 1.0,      // Seed size multiplier
    cameraSpeed: 0.5,
    epicycles: 0, 
    zoom: 100,            // Zoom percent (100% = base distance)
    delay: 0,             // Sequence Delay (sec) - 0 for immediate start
    displayDuration: 1.3,  // Seed Display Time (sec)
    resetKey: 0            // For forcing re-render
  });
  const settingsRef = useRef(settings);

  // Sync ref
  useEffect(() => { settingsRef.current = settings; }, [settings]);

  // Generators
  const generateTrefoilKnot = (N = 512, scale = 120) => {
    const points = [];
    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 2;
      const x = Math.sin(t) + 2 * Math.sin(2 * t);
      const y = Math.cos(t) - 2 * Math.cos(2 * t);
      const z = -Math.sin(3 * t);
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
      const x = scale * Math.cos(p * t / q) * (1 + 0.5 * Math.cos(q * t / q));
      const y = scale * Math.sin(p * t / q) * (1 + 0.5 * Math.cos(q * t / q));
      const z = scale * 0.5 * Math.sin(q * t / q);
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

  useEffect(() => {
    if (!mountRef.current) return;

    // Cleanup previous renderer if any (React StrictMode fix)
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // 검정 배경
    scene.fog = null; // 안개 제거

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000); // Far clip increased
    camera.position.set(400, 300, 400); 
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // 4. Lights
    scene.add(new THREE.AmbientLight(0x404040, 3));
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(200, 200, 200);
    scene.add(pointLight);

    // 5. Data Gen (DFT)
    const currentPattern = settingsRef.current.pattern || 'lissajous';
    let seedPoints = [];
    const baseScale = 120;
    const scale = baseScale * settingsRef.current.shapeScale;
    try {
        if (currentPattern === 'knot') {
          seedPoints = generateTrefoilKnot(256, scale);
        } else if (currentPattern === 'torusknot25') {
          seedPoints = generateTorusKnot25(256, scale);
        } else {
          seedPoints = generateLissajous3D(256, scale);
        }
    } catch (e) {
        console.error("Pattern gen failed, fallback", e);
        seedPoints = generateTrefoilKnot(256, scale);
    }

    // Safety check
    if (!seedPoints || seedPoints.length === 0) {
        console.warn("No seed points generated");
        return;
    }

    const xSignal = seedPoints.map(p => ({ re: p.x, im: 0 }));
    const ySignal = seedPoints.map(p => ({ re: p.y, im: 0 }));
    const zSignal = seedPoints.map(p => ({ re: p.z, im: 0 }));

    const fX = dft(xSignal).sort((a, b) => b.amp - a.amp);
    const fY = dft(ySignal).sort((a, b) => b.amp - a.amp);
    const fZ = dft(zSignal).sort((a, b) => b.amp - a.amp);

    // Init epicycles max
    if (settingsRef.current.epicycles === 0) {
      setSettings(prev => ({ ...prev, epicycles: fX.length }));
    }

    // 6. Visualization Objects
    const MAX_BUFFER = 10000; // Increased buffer
    const trailGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(MAX_BUFFER * 3);
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    trailGeometry.setDrawRange(0, 0);

    const trailMaterial = new THREE.LineBasicMaterial({ 
      color: 0xff00ff, 
      linewidth: settingsRef.current.pathWeight 
    });
    const trailLine = new THREE.Line(trailGeometry, trailMaterial);
    trailLine.frustumCulled = false;
    trailLineRef.current = trailLine; // Save ref for reset
    scene.add(trailLine);

    const penGeometry = new THREE.SphereGeometry(6, 16, 16); // Larger pen
    const penMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0xffffff });
    const pen = new THREE.Mesh(penGeometry, penMaterial);
    scene.add(pen);

    // 바닥 그리드 제거됨

    // ★ SEED VISUALIZATION - Show original seed shape as yellow line
    const seedGeometry = new THREE.BufferGeometry().setFromPoints(seedPoints);
    const seedMaterial = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2 });
    const seedLine = new THREE.LineLoop(seedGeometry, seedMaterial);
    scene.add(seedLine);

    // Seed auto-hide after displayDuration
    const hideTimeout = setTimeout(() => {
      seedLine.visible = false;
    }, settingsRef.current.displayDuration * 1000);

    // Animation start delay
    let animationStarted = false;
    const startTimeout = setTimeout(() => {
      animationStarted = true;
    }, settingsRef.current.delay * 1000);

    // Animation Loop
    let animationId;
    const baseDt = (Math.PI * 2) / fX.length; 

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const currentSettings = settingsRef.current;
      const dt = baseDt * currentSettings.speed;
      
      // DEBUG
      if (Math.random() < 0.01) { // 1% 확률로 로그 (너무 많은 출력 방지)
        console.log('speed:', currentSettings.speed, 'dt:', dt, 'time:', timeRef.current);
      }

      timeRef.current += dt;
      if (timeRef.current > Math.PI * 2) {
        timeRef.current = 0;
        trailRef.current = []; // Clear trail on cycle complete
      }

      const limit = currentSettings.epicycles && currentSettings.epicycles > 0 ? currentSettings.epicycles : fX.length;
      
      const x = computeFourierPoint(fX, timeRef.current, Math.PI / 2, limit);
      const y = computeFourierPoint(fY, timeRef.current, Math.PI / 2, limit);
      const z = computeFourierPoint(fZ, timeRef.current, Math.PI / 2, limit);
      
      if (isNaN(x) || isNaN(y) || isNaN(z)) return;

      const currentPoint = new THREE.Vector3(x, y, z);
      pen.position.copy(currentPoint);

      // Simple & Robust Trail Update
      trailRef.current.push(currentPoint);
      
      // Limit trail length strictly
      const trailLength = Math.floor(currentSettings.persistence * 1000);
      while (trailRef.current.length > trailLength) {
        trailRef.current.shift();
      }

      // Update Geometry strictly
      const positions = trailLine.geometry.attributes.position.array;
      const pointCount = trailRef.current.length;
      
      for (let i = 0; i < pointCount; i++) {
        const p = trailRef.current[i];
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      }
      
      trailLine.geometry.setDrawRange(0, pointCount);
      trailLine.geometry.attributes.position.needsUpdate = true;

      // Camera Orbit
      if (currentSettings.cameraSpeed > 0) {
        const camTime = Date.now() * 0.0005 * currentSettings.cameraSpeed;
        const radius = 40000 / currentSettings.zoom; // 100% = 400, 200% = 200 (closer = bigger)
        camera.position.x = Math.cos(camTime) * radius;
        camera.position.z = Math.sin(camTime) * radius;
        camera.position.y = Math.sin(camTime * 0.5) * 200 + 300; 
        camera.lookAt(0, 0, 0);
      } else {
        const lookVec = new THREE.Vector3(0, 0, 0);
        camera.lookAt(lookVec);
        const dir = camera.position.clone().sub(lookVec).normalize();
        camera.position.copy(dir.multiplyScalar(40000 / currentSettings.zoom));
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      clearTimeout(hideTimeout);
      clearTimeout(startTimeout);
      // Strict cleanup
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
      trailGeometry.dispose();
      trailMaterial.dispose();
      penGeometry.dispose();
      penMaterial.dispose();
      seedGeometry.dispose();
      seedMaterial.dispose();
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
          Seed: {settings.pattern === 'knot' ? 'Trefoil Knot' : 'Lissajous 3D'}
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

        {/* 4. Path Weight */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Path Weight</span>
            <span style={{ color: '#00f2ff' }}>{settings.pathWeight}px</span>
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

        {/* 6. Sequence Delay */}
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

        {/* 7. Seed Display Time */}
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

        {/* 8. Camera Rotation (3D only) */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Camera Rotation</span>
            <span style={{ color: '#00f2ff' }}>{settings.cameraSpeed.toFixed(1)}</span>
          </label>
          <input 
            type="range" min="0" max="3" step="0.1" 
            value={settings.cameraSpeed}
            onChange={(e) => setSettings(prev => ({ ...prev, cameraSpeed: parseFloat(e.target.value) }))}
            style={{ width: '100%', accentColor: '#00f2ff' }}
          />
        </div>

        {/* 9. Zoom (3D only) */}
        <div style={{ marginBottom: '0' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
            <span>Zoom</span>
            <span style={{ color: '#00f2ff' }}>{settings.zoom}%</span>
          </label>
          <input 
            type="range" min="50" max="300" step="10" 
            value={settings.zoom}
            onChange={(e) => setSettings(prev => ({ ...prev, zoom: parseInt(e.target.value) }))}
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
          { id: 'lissajous', name: 'Lissajous 3D', emoji: '🌀' },
          { id: 'knot', name: 'Trefoil Knot', emoji: '🪢' },
          { id: 'torusknot25', name: 'Torus (2,5)', emoji: '🔮' }
        ].map(p => (
          <button
            key={p.id}
            onClick={() => setSettings(prev => ({ ...prev, pattern: p.id, speed: 0.08 }))}
            style={{
              background: settings.pattern === p.id 
                ? 'rgba(0, 242, 255, 0.3)' 
                : 'rgba(0, 0, 0, 0.6)',
              border: settings.pattern === p.id 
                ? '2px solid #00f2ff' 
                : '1px solid rgba(255, 255, 255, 0.2)',
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
            // Direct geometry clear + stop animation
            timeRef.current = 0;
            trailRef.current = [];
            if (trailLineRef.current) {
              trailLineRef.current.geometry.setDrawRange(0, 0);
            }
            setSettings(prev => ({ ...prev, speed: 0 })); // Stop animation
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
