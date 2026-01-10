import { useState } from 'react'
import FourierCanvas2D from './components/FourierCanvas2D'
import FourierCanvas3D from './components/FourierCanvas3D'
import './index.css'

function App() {
  const [mode, setMode] = useState('2D');

  return (
    <div className="app-container">
      {/* Mode Switcher */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '50%',
        transform: 'translateX(50%)',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        padding: '4px',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        gap: '4px'
      }}>
        <button 
          onClick={() => setMode('2D')}
          style={{
            background: mode === '2D' ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
            color: mode === '2D' ? 'black' : 'white',
            border: 'none',
            borderRadius: '16px',
            padding: '4px 12px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          2D Oracles
        </button>
        <button 
          onClick={() => setMode('3D')}
          style={{
            background: mode === '3D' ? 'rgba(0, 242, 255, 0.8)' : 'transparent',
            color: mode === '3D' ? 'black' : 'rgba(255, 255, 255, 0.6)',
            border: 'none',
            borderRadius: '16px',
            padding: '4px 12px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          3D Space
        </button>
      </div>

      {mode === '2D' ? <FourierCanvas2D /> : <FourierCanvas3D />}
    </div>
  )
}

export default App
