import React, { useRef, useEffect, useState, useCallback } from 'react';
import { dft } from '../lib/dft';

const FourierCanvas = () => {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const voicesRef = useRef({}); 
  const drawingPathRef = useRef([]); 
  const userPathRef = useRef([]); 
  const previewCenterRef = useRef({ x: 0, y: 0 }); 
  const baseDroneRef = useRef(null); 
  const globalSettingsRef = useRef(null); 
  const instancesRef = useRef([]); 
  const lastManualPathRef = useRef(null); // Instant button activation
  const lastInteractionTimeRef = useRef(Date.now()); // Auto-reset timer
  const AUTO_RESET_MS = 180000; // 3 minutes

  const [isDrawing, setIsDrawing] = useState(false);
  const [userPath, setUserPath] = useState([]);
  const [lastManualPath, setLastManualPath] = useState(null); 
  const [previewCenter, setPreviewCenter] = useState({ x: 0, y: 0 }); 
  const [instances, setInstances] = useState([]); 
  const [numCircles, setNumCircles] = useState(100);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [masterVolume, setMasterVolume] = useState(0.2);
  const [globalSettings, setGlobalSettings] = useState({
    speed: 0.08,
    persistence: 2,
    weight: 1.8,
    coreWeight: 0.5,
    intensity: 0.15,
    spread: 600, 
    scale: 1.26,
    delay: 1.2,
    displayDuration: 1.3,  // seconds before seed preview disappears
    waveform: 'sine'
  });

  /* State for mobile settings panel toggle */
  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);

  // Keep refs in sync for render loop
  useEffect(() => { globalSettingsRef.current = globalSettings; }, [globalSettings]);
  useEffect(() => { userPathRef.current = userPath; }, [userPath]);
  useEffect(() => { previewCenterRef.current = previewCenter; }, [previewCenter]);
  useEffect(() => { previewCenterRef.current = previewCenter; }, [previewCenter]);
  
  const skipPoints = 2; 

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    
    // Ensure all moves are captured even if outside the canvas
    e.target.setPointerCapture(e.pointerId);
    
    setIsDrawing(true);
    setPreviewCenter({ x: 0, y: 0 }); 
    const coords = getCoordinates(e);
    drawingPathRef.current = [coords];
    setUserPath([coords]);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    const coords = getCoordinates(e);
    drawingPathRef.current.push(coords);
    setUserPath(prev => [...prev, coords]);
  };

  const handlePointerUp = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);
    
    try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
    
    saveDrawingPath();
  };

  const handlePointerCancel = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);
    
    try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
    
    // Still save even on cancel
    saveDrawingPath();
  };

  const saveDrawingPath = () => {
    const finalPath = drawingPathRef.current;
    
    // Lower threshold: save even with 1 point
    if (finalPath.length > 0) { 
      const avgX = finalPath.reduce((sum, p) => sum + p.x, 0) / finalPath.length;
      const avgY = finalPath.reduce((sum, p) => sum + p.y, 0) / finalPath.length;
      
      const canvas = canvasRef.current;
      const screenCenter = {
        x: avgX - canvas.width / 2,
        y: avgY - canvas.height / 2
      };

      const normalizedPath = finalPath.map(p => ({ x: p.x - avgX, y: p.y - avgY }));
      
      // Update both ref and state for instant + reactive update
      lastManualPathRef.current = normalizedPath;
      setLastManualPath(normalizedPath);
      
      // Only process if path has enough points for DFT
      if (finalPath.length >= 2) {
        processPath(finalPath, 'manual', screenCenter); 
      }
    }
    
    setUserPath([]);
    drawingPathRef.current = [];
  };

  const processPath = useCallback((path, seedType = null, fixedCenter = null) => {
    if (path.length < 2) return;

    const avgX = path.reduce((sum, p) => sum + p.x, 0) / path.length;
    const avgY = path.reduce((sum, p) => sum + p.y, 0) / path.length;

    // Use full precision for small paths (manual drawings)
    const currentSkip = (seedType === 'manual' || path.length < 100) ? 1 : skipPoints;

    const complexPath = path
      .filter((_, i) => i % currentSkip === 0)
      .map(p => ({ re: p.x - avgX, im: p.y - avgY }));
    
    const result = dft(complexPath);
    result.sort((a, b) => b.amp - a.amp);
    
    const newInstance = {
      id: Date.now(),
      createdAt: Date.now(),  // timestamp for display duration
      fourier: result,
      time: 0,
      path: [],
      center: fixedCenter || { 
        x: (Math.random() - 0.5) * globalSettings.spread, 
        y: (Math.random() - 0.5) * globalSettings.spread 
      },
      hue: Math.random() * 360,
      activeSeed: seedType,
      precision: numCircles,
      isAnimating: true,
      reversed: Math.random() < 0.5  // 50% chance to reverse rotation direction
    };

    setInstances(prev => {
      const updated = [...prev, newInstance];
      const sliced = updated.slice(-6); // Increased limit slightly for variety
      instancesRef.current = sliced; // Update ref immediately
      lastInteractionTimeRef.current = Date.now(); // Reset auto-reset timer
      return sliced;
    });
  }, [numCircles, globalSettings.spread]);

  const generateSeed = (type) => {
    const points = [];
    const N = 512;
    const screenSize = Math.min(window.innerWidth, window.innerHeight);
    const size = screenSize * 0.3 * globalSettings.scale;
    // Scale spread relative to screen size (600px at 1000px screen)
    const effectiveSpread = globalSettings.spread * (screenSize / 1000);

    const targetCenter = {
      x: (Math.random() - 0.5) * effectiveSpread,
      y: (Math.random() - 0.5) * effectiveSpread
    };
    setPreviewCenter(targetCenter);

    if (type === 'custom') {
      if (!lastManualPath) return;
      setUserPath([...lastManualPath]);
      setTimeout(() => processPath(lastManualPath, 'custom', targetCenter), globalSettings.delay * 1000);
      setTimeout(() => { setUserPath([]); setPreviewCenter({ x: 0, y: 0 }); }, globalSettings.delay * 1000 + globalSettings.displayDuration * 1000);
      return;
    }

    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 2;
      let x = 0, y = 0;

      if (type === 'lissajous') {
        x = size * Math.sin(3 * t + Math.PI / 2);
        y = size * Math.sin(2 * t);
      } else if (type === 'hypotrochoid') {
        const R = size, r = size * 0.4, d = size * 0.6;
        x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
        y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
      } else if (type === 'infinity') {
        const scale = size * 1.5;
        x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
        y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      } else if (type === 'ellipse') {
        // Ellipse: simple, smooth, closed, differentiable everywhere
        const a = size * 1.2, b = size * 0.6;
        x = a * Math.cos(t);
        y = b * Math.sin(t);
      } else if (type === 'cassini') {
        // Cassini Oval (a < b): smooth single oval, no cusps
        const a = size * 0.3, b = size * 0.5;
        const cos2t = Math.cos(2 * t);
        const sqrtVal = Math.sqrt(b * b * b * b - a * a * a * a * Math.sin(2 * t) * Math.sin(2 * t));
        const r = Math.sqrt(a * a * cos2t + sqrtVal);
        x = r * Math.cos(t);
        y = r * Math.sin(t);
      }

      points.push({ x, y }); 
    }

    // Randomize rotation direction (50% chance to reverse)
    const reverseDirection = Math.random() < 0.5;
    const finalPoints = reverseDirection 
      ? points.map(p => ({ x: p.x, y: -p.y }))
      : points;

    setUserPath(finalPoints.map(p => ({ x: p.x, y: p.y })));
    setTimeout(() => processPath(finalPoints, type, targetCenter), globalSettings.delay * 1000);
    setTimeout(() => { setUserPath([]); setPreviewCenter({ x: 0, y: 0 }); }, globalSettings.delay * 1000 + globalSettings.displayDuration * 1000);
  };

  const getColor = (index, total, baseHue, alpha = 1) => {
    const hueVariation = (index / total) * 40 - 20;
    const finalHue = (baseHue + hueVariation + 360) % 360;
    return `hsla(${finalHue}, 100%, 65%, ${alpha})`;
  };

  const drawEpicycles = (ctx, x, y, rotation, fourier, instanceHue, precision, settings) => {
    let currentX = x;
    let currentY = y;

    for (let i = 0; i < Math.min(fourier.length, precision); i++) {
      const prevX = currentX;
      const prevY = currentY;
      const { freq, amp, phase } = fourier[i];
      const angle = freq * rotation + phase;
      
      currentX += amp * Math.cos(angle);
      currentY += amp * Math.sin(angle);

      const alpha = Math.max(0.005, settings.intensity - i * 0.0005);
      ctx.beginPath();
      ctx.strokeStyle = getColor(i, precision, instanceHue, alpha);
      ctx.lineWidth = settings.coreWeight; 
      ctx.arc(prevX, prevY, amp, 0, Math.PI * 2);
      ctx.stroke();

      if (i < 10) { 
        ctx.beginPath();
        ctx.strokeStyle = getColor(i, precision, instanceHue, alpha * 2);
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
      }
    }
    return { x: currentX, y: currentY };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      const settings = globalSettingsRef.current;
      if (!settings) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      // Check if resize needed
      if (canvas.width !== currentWidth || canvas.height !== currentHeight) {
        
        // Prevent division by zero
        if (canvas.width > 0 && canvas.height > 0) {
          const widthRatio = currentWidth / canvas.width;
          const heightRatio = currentHeight / canvas.height;
          
          // Use the smaller ratio to keep aspect ratio of the drawing, 
          // or use specific axis ratio to stretch? User wants "canvas ratio", let's scale X and Y independently to match screen
          // Actually, keeping aspect ratio is usually better for shapes like circles.
          // let's scale coordinates by their respective axis, but size (amp) by min ratio.
          
          const scaleRatio = Math.min(widthRatio, heightRatio);

          // 1. Resize visual instances (Mutate directly for speed in render loop)
          instancesRef.current.forEach(inst => {
            inst.center.x *= widthRatio;
            inst.center.y *= heightRatio;
            
            // Fourier amplitudes (size)
            inst.fourier.forEach(f => f.amp *= scaleRatio);
            
            // Path history
            inst.path.forEach(p => {
              p.x *= widthRatio;
              p.y *= heightRatio;
            });
          });

          // 2. Resize user drawing path
          if (userPathRef.current.length > 0) {
            userPathRef.current.forEach(p => {
              p.x *= widthRatio;
              p.y *= heightRatio;
            });
            setUserPath([...userPathRef.current]); // Sync State
          }
           
          // 3. Resize drawing buffer
          if (drawingPathRef.current && drawingPathRef.current.length > 0) {
            drawingPathRef.current.forEach(p => {
              p.x *= widthRatio;
              p.y *= heightRatio;
            });
          }

          // 4. Resize preview center
          if (previewCenterRef.current) {
             previewCenterRef.current.x *= widthRatio;
             previewCenterRef.current.y *= heightRatio;
             setPreviewCenter({ ...previewCenterRef.current });
          }
        }

        // Apply new size
        canvas.width = currentWidth;
        canvas.height = currentHeight;
      }

      const fadeAlpha = Math.max(0.01, 0.2 / (settings.persistence / 2));
      ctx.fillStyle = `rgba(2, 2, 5, ${fadeAlpha})`; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.008)';
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for(let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for(let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Drawing Preview
      const currentPath = userPathRef.current;
      const currentCenter = previewCenterRef.current;
      
      if (currentPath.length > 0) {
        ctx.save();
        if (currentCenter.x !== 0 || currentCenter.y !== 0) {
          ctx.translate(canvas.width / 2 + currentCenter.x, canvas.height / 2 + currentCenter.y);
        }
        ctx.strokeStyle = 'rgba(0, 242, 255, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(currentPath[0].x, currentPath[0].y);
        currentPath.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.stroke();
        ctx.restore();
      }

      // Update simulation data in Ref (Mutate for performance)
      instancesRef.current = instancesRef.current.map(inst => {
        if (!inst.isAnimating) return inst;
        
        // Simulation physics within render loop
        const v = drawEpicycles(ctx, canvas.width / 2 + inst.center.x, canvas.height / 2 + inst.center.y, inst.time, inst.fourier, inst.hue, inst.precision, settings);
        
        const updatedPath = [v, ...inst.path];
        const maxPath = inst.fourier.length * settings.persistence;
        if (updatedPath.length > maxPath) updatedPath.pop();

        if (updatedPath.length > 1) {
          ctx.save();
          ctx.lineJoin = 'round'; ctx.lineCap = 'round';
          ctx.lineWidth = settings.weight; 
          ctx.beginPath();
          ctx.moveTo(updatedPath[0].x, updatedPath[0].y);
          for (let i = 1; i < updatedPath.length; i++) {
            ctx.globalAlpha = Math.max(0.02, 1 - i / updatedPath.length);
            ctx.lineTo(updatedPath[i].x, updatedPath[i].y);
            if (i % 30 === 0) {
              const segmentHue = (inst.hue + (i / updatedPath.length) * 30) % 360;
              ctx.strokeStyle = `hsla(${segmentHue}, 100%, 65%, ${ctx.globalAlpha})`;
              ctx.stroke(); ctx.beginPath(); ctx.moveTo(updatedPath[i].x, updatedPath[i].y);
            }
          }
          ctx.stroke(); ctx.restore();
        }

        const baseDt = (Math.PI * 2) / inst.fourier.length * settings.speed;
        const dt = inst.reversed ? -baseDt : baseDt;  // Reverse direction if flagged
        const newTime = (inst.time + dt + Math.PI * 2) % (Math.PI * 2);
        return { ...inst, path: updatedPath, time: newTime };
      });


      // Sync with React state for UI components
      setInstances([...instancesRef.current]);

      animationFrameId = requestAnimationFrame(render);

      // Auto-reset after 3 minutes of inactivity
      if (Date.now() - lastInteractionTimeRef.current > AUTO_RESET_MS && instancesRef.current.length > 0) {
        instancesRef.current = [];
        setInstances([]);
        setUserPath([]);
        // Stop audio
        if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
          Object.values(voicesRef.current).forEach(v => {
            if (v.osc) v.osc.stop();
          });
          voicesRef.current = {};
          if (baseDroneRef.current) {
            baseDroneRef.current.stop();
            baseDroneRef.current = null;
          }
        }
      }
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Truly stable animation loop

  useEffect(() => {
    instancesRef.current = instancesRef.current.map(inst => ({ ...inst, precision: numCircles }));
    setInstances([...instancesRef.current]);
  }, [numCircles]);

  // Audio management
  useEffect(() => {
    if (!isAudioEnabled || !audioCtxRef.current) {
      if (baseDroneRef.current) {
        baseDroneRef.current.gain.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.1);
        setTimeout(() => {
          if (baseDroneRef.current) {
            baseDroneRef.current.oscillators.forEach(osc => { try { osc.stop(); } catch(e){} });
            baseDroneRef.current.gain.disconnect();
            baseDroneRef.current = null;
          }
        }, 200);
      }
      Object.keys(voicesRef.current).forEach(id => {
        const v = voicesRef.current[id];
        v.gain.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.1);
        v.oscillators.forEach(osc => { try { osc.stop(audioCtxRef.current.currentTime + 0.2); } catch(e){} });
        delete voicesRef.current[id];
      });
      return;
    }

    const ctx = audioCtxRef.current;
    if (!baseDroneRef.current && isAudioEnabled) {
      const droneGain = ctx.createGain();
      droneGain.gain.value = 0; droneGain.connect(masterGainRef.current);
      const oscs = [55, 110, 165].map(freq => {
        const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = freq;
        const g = ctx.createGain(); g.gain.value = 0.05;
        osc.connect(g); g.connect(droneGain); osc.start(); return osc;
      });
      baseDroneRef.current = { gain: droneGain, oscillators: oscs };
      droneGain.gain.setTargetAtTime(0.3, ctx.currentTime, 2);
    }

    const currentIds = new Set(instances.map(inst => inst.id));
    Object.keys(voicesRef.current).forEach(id => {
      if (!currentIds.has(Number(id))) {
        const voice = voicesRef.current[id];
        voice.gain.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
        setTimeout(() => {
          voice.oscillators.forEach(osc => { try { osc.stop(); } catch(e){} });
          voice.gain.disconnect(); if (voice.panner) voice.panner.disconnect();
          delete voicesRef.current[id];
        }, 500);
      }
    });

    instances.forEach(inst => {
      if (!voicesRef.current[inst.id]) {
        const voiceGain = ctx.createGain(); voiceGain.gain.value = 0;
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        if (panner) { panner.connect(masterGainRef.current); voiceGain.connect(panner); }
        else { voiceGain.connect(masterGainRef.current); }

        const oscillators = inst.fourier.slice(1, 13).map((h, i) => {
          const osc = ctx.createOscillator(); const harmonicGain = ctx.createGain();
          osc.type = globalSettings.waveform; osc.frequency.value = 220 * (i + 1); 
          harmonicGain.gain.value = (h.amp / inst.fourier[0].amp) * 0.12; 
          osc.connect(harmonicGain); harmonicGain.connect(voiceGain); osc.start(); return osc;
        });
        voicesRef.current[inst.id] = { gain: voiceGain, oscillators, panner };
        voiceGain.gain.setTargetAtTime(0.2, ctx.currentTime, 0.4);
      }
      const voice = voicesRef.current[inst.id];
      if (voice && voice.panner) {
        const panVal = (inst.center.x / (window.innerWidth / 1.5));
        voice.panner.pan.setTargetAtTime(Math.max(-1, Math.min(1, panVal)), ctx.currentTime, 0.1);
      }
    });
  }, [instances, isAudioEnabled, globalSettings.waveform]);

  const resetAll = () => { 
    instancesRef.current = [];
    setInstances([]); 
    setUserPath([]);
    lastInteractionTimeRef.current = Date.now(); // Reset timer
  };
  const updateGlobal = (key, val) => setGlobalSettings(prev => ({ ...prev, [key]: val }));

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
      const masterGain = audioCtxRef.current.createGain();
      masterGain.gain.value = masterVolume;
      masterGain.connect(audioCtxRef.current.destination);
      masterGainRef.current = masterGain;
    }
    if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
    setIsAudioEnabled(true);
  };

  const toggleAudio = () => {
    if (!isAudioEnabled) initAudio();
    else { if (audioCtxRef.current) audioCtxRef.current.suspend(); setIsAudioEnabled(false); }
  };

  useEffect(() => {
    if (masterGainRef.current) masterGainRef.current.gain.setTargetAtTime(masterVolume, audioCtxRef.current.currentTime, 0.1);
  }, [masterVolume]);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        style={{ touchAction: 'none' }}
      />
      
      {instances.length === 0 && !isDrawing && (
        <div className="instruction-overlay">Summon harmonics or draw your own</div>
      )}

      <div className="ui-overlay">
        <header className="header" onPointerDown={e => e.stopPropagation()}>
          <div className="header-top">
            <div className="header-title">
              <h1>2D Fourier</h1>
              <p>Multi-instance harmonic synthesis</p>
            </div>
          </div>
        </header>

        {/* Mobile Hamburger Button - 3D와 동일한 스타일 */}
        <button
          className="mobile-settings-toggle"
          onClick={() => setIsMobileSettingsOpen(!isMobileSettingsOpen)}
          style={{
            display: 'none', // CSS에서 모바일에서만 보임
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(0, 242, 255, 0.2)',
            border: '1px solid rgba(0, 242, 255, 0.5)',
            color: 'white',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 10000
          }}
        >
          {isMobileSettingsOpen ? '✕' : '☰'}
        </button>

        {/* New Floating Dock at Bottom Center */}
        <div className="floating-dock-container" onPointerDown={e => e.stopPropagation()}>
          <div className="floating-dock">
            <button onClick={() => {
              const opts = ['lissajous', 'hypotrochoid', 'infinity', 'ellipse', 'cassini'];
              if (lastManualPath) opts.push('custom');
              generateSeed(opts[Math.floor(Math.random() * opts.length)]);
            }} className="dock-btn random" title="Random Shuffle">
              🎲 <span className="btn-label">Shuffle</span>
            </button>
            <div className="dock-divider"></div>
            <button onClick={() => generateSeed('lissajous')} className="dock-btn" title="Lissajous Curve">Lissajous</button>
            <button onClick={() => generateSeed('hypotrochoid')} className="dock-btn" title="Spirograph">Spirograph</button>
            <button onClick={() => generateSeed('infinity')} className="dock-btn" title="Infinity Loop">Infinity</button>
            <button onClick={() => generateSeed('ellipse')} className="dock-btn" title="Simple Ellipse">Ellipse</button>
            <button onClick={() => generateSeed('cassini')} className="dock-btn" title="Cassini Oval">Cassini</button>
            <div className="dock-divider"></div>
            <button onClick={() => generateSeed('custom')} className={`dock-btn special ${!lastManualPathRef.current && !lastManualPath ? 'disabled' : ''}`} title="Redraw Your Path">
              ✨ <span className="btn-label">My Art</span>
            </button>
            <div className="dock-divider"></div>
            <button className="dock-btn reset-text" onClick={resetAll} title="Clear Canvas & Restart">
              🔄 Reset
            </button>
          </div>
        </div>

        <div className={`controls ${isMobileSettingsOpen ? 'mobile-open' : ''}`} onPointerDown={e => e.stopPropagation()}>
          <div className="panel-header">
            Settings 
            {/* Close button for mobile inside panel */}
            <span className="mobile-close-btn" onClick={() => setIsMobileSettingsOpen(false)}>✕</span>
          </div>
          
          {/* Audio controls in panel */}
          <div className="control-section">
            <div className="section-header-row">
              <div className="section-title">Audio</div>
              <button 
                className={`panel-audio-toggle ${isAudioEnabled ? 'active' : ''}`} 
                onClick={toggleAudio}
                title={isAudioEnabled ? 'Disable Audio' : 'Enable Audio'}
              >
                {isAudioEnabled ? '🔊' : '🔇'}
              </button>
            </div>
            <div className="control-group">
              <label>Volume: {Math.round(masterVolume * 100)}%</label>
              <input type="range" min="0" max="1" step="0.01" value={masterVolume} onChange={(e) => setMasterVolume(parseFloat(e.target.value))} />
            </div>
            <div className="control-group">
              <label>Sound Mood</label>
              <div className="mood-selector">
                {['sine', 'triangle', 'square', 'sawtooth'].map(type => (
                  <button key={type} className={`mood-btn ${globalSettings.waveform === type ? 'active' : ''}`} onClick={() => updateGlobal('waveform', type)}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual controls */}
          <div className="control-section">
            <div className="section-title">Visual</div>
            <div className="control-group">
              <label>Geometric Detail: {numCircles}</label>
              <input type="range" min="1" max="500" value={numCircles} onChange={(e) => setNumCircles(parseInt(e.target.value))} />
            </div>
            <div className="control-group"><label>Flow Speed: {globalSettings.speed.toFixed(2)}x</label><input type="range" min="0.01" max="0.5" step="0.01" value={globalSettings.speed} onChange={(e) => updateGlobal('speed', parseFloat(e.target.value))} /></div>
            <div className="control-group"><label>Persistence: {globalSettings.persistence}x</label><input type="range" min="1" max="15" step="0.5" value={globalSettings.persistence} onChange={(e) => updateGlobal('persistence', parseFloat(e.target.value))} /></div>
            <div className="control-group"><label>Path Weight: {globalSettings.weight.toFixed(1)}px</label><input type="range" min="0.5" max="5" step="0.1" value={globalSettings.weight} onChange={(e) => updateGlobal('weight', parseFloat(e.target.value))} /></div>
            <div className="control-group"><label>Core Weight: {globalSettings.coreWeight.toFixed(1)}px</label><input type="range" min="0.1" max="4" step="0.1" value={globalSettings.coreWeight} onChange={(e) => updateGlobal('coreWeight', parseFloat(e.target.value))} /></div>
            <div className="control-group"><label>Intensity: {Math.round(globalSettings.intensity * 500)}%</label><input type="range" min="0.02" max="0.3" step="0.01" value={globalSettings.intensity} onChange={(e) => updateGlobal('intensity', parseFloat(e.target.value))} /></div>
            <div className="control-group"><label>Spatial Spread: {globalSettings.spread}px</label><input type="range" min="0" max="2500" step="10" value={globalSettings.spread} onChange={(e) => updateGlobal('spread', parseInt(e.target.value))} /></div>
            <div className="control-group"><label>Shape Scale: {Math.round(globalSettings.scale * 100)}%</label><input type="range" min="0.2" max="1.5" step="0.1" value={globalSettings.scale} onChange={(e) => updateGlobal('scale', parseFloat(e.target.value))} /></div>
            <div className="control-group"><label>Sequence Delay: {globalSettings.delay.toFixed(1)}s</label><input type="range" min="0" max="5" step="0.1" value={globalSettings.delay} onChange={(e) => updateGlobal('delay', parseFloat(e.target.value))} /></div>
            <div className="control-group"><label>Seed Display Time: {globalSettings.displayDuration}s</label><input type="range" min="0.5" max="30" step="0.5" value={globalSettings.displayDuration} onChange={(e) => updateGlobal('displayDuration', parseFloat(e.target.value))} /></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FourierCanvas;
