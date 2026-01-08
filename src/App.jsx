import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleIncrement = () => {
    setCount((count) => count + 1)
    setIsAnimating(true)
  }

  // Reset animation state
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <div className="container" style={{
      position: 'relative',
      zIndex: 1
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: -1,
        animation: 'float 6s ease-in-out infinite'
      }} />

      <div className="glass-panel" style={{
        padding: '3rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        textAlign: 'center',
        minWidth: '320px'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          color: 'var(--color-text-muted)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          Counter App
        </h1>

        <div style={{
          fontSize: '6rem',
          fontWeight: '700',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-text-main)',
          textShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
          transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
          {count}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={handleIncrement}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'white',
              background: 'var(--gradient-main)',
              borderRadius: '50px',
              boxShadow: 'var(--shadow-glow)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.95)'
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'
            }}
          >
            Increment
          </button>
          
          <button 
             onClick={() => setCount(0)}
             style={{
               padding: '1rem',
               borderRadius: '50%',
               background: 'rgba(255,255,255,0.05)',
               color: 'var(--color-text-muted)',
               fontSize: '1rem',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               transition: 'all 0.2s ease'
             }}
             onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = '#fff'
             }}
             onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.color = 'var(--color-text-muted)'
             }}
             title="Reset"
          >
            ↺
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
