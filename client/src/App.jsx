import { useState } from 'react'
import sparcsLogo from './assets/sparcs.svg'
import './App.css'
import Calendar from './components/Calendar.jsx'
import Saying from './components/saying'
import Lists from './components/Lists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
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

            <p className="instruction">
              Click on the days below
            </p>

            <Calendar />
            <Saying />

          </div>

          <div className="column column2">
            <Lists />
          </div>


        </div>

      <footer>
        <p>footer</p>
      </footer>
      </div>
    </>

  )
}

export default App
