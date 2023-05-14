import { useState } from 'react'
import sparcsLogo from './assets/sparcs.svg'
import './App.css'
import Calendar from './components/Calendar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (  
    <>
    <header>

      <h1>
        <a href="https://sparcs.org" target="_blank" rel="noreferrer">
          <img src={sparcsLogo} className="logo toplogo" alt="React logo" />
      </a>
      <span className="title">Checkmate</span>
      </h1>

    </header>

    <div className="wrapper">
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          hehe
        </p>
    </div>

      <p className="read-the-docs">
        Click on the days below
      </p>

    <Calendar />

    </div>
    
    <footer>
      <p>footer</p>
    </footer>
    </>

  )
}

export default App
