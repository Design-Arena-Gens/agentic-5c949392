export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#0070f3',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '4rem',
          margin: '0 0 1rem 0',
          fontWeight: 'bold'
        }}>
          Hello World
        </h1>
        <p style={{
          fontSize: '1.5rem',
          margin: 0,
          opacity: 0.9
        }}>
          Welcome to React.js
        </p>
      </div>
    </div>
  )
}
