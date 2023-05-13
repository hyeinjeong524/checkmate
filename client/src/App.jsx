import { useState } from 'react'
import sparcsLogo from './assets/sparcs.svg'
import './App.css'
import Calendar from './components/Calendar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <a href="https://sparcs.org" target="_blank" rel="noreferrer">
          <img src={sparcsLogo} className="logo toplogo" alt="React logo" />
      </a>
      
    </header>
      <p>환경변수 쓰기 - client: { process.env.TEST }</p>
      <div>
        <a href="https://sparcs.org" target="_blank" rel="noreferrer">
          <img src={sparcsLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <p>
          hehe
        </p>
      </div>
      <p className="read-the-docs">
        Click on the days below
      </p>
    <Calendar />
    <footer>
      <p>footer</p>
    </footer>
    </>
  )
}

export default App
