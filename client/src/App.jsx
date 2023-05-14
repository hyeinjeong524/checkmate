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
        <div className="column column1">

        <p className="read-the-docs">
          Click on the days below
        </p>

        <Calendar />

        </div>

        <div className="column column2">


        </div>


      </div>

      <footer>
        <p>footer</p>
      </footer>
    </>

  )
}

export default App
