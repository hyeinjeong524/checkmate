import { useState } from 'react'
import sparcsLogo from './assets/sparcs.svg'
import './App.css'
import Calendar from './components/Calendar.jsx'
import Saying from './components/saying'
import RightSide from './components/RightSide'  

function App() {
  const [currentDay, setCurrentDay] = useState(1);

  return (//헤더 분리해서 로그인 칸이랑 버튼 만들고 app에 state 추가해야함 (로그인된 계정이름)
  //또 not signed in이면 추가 안되게 alert보내야함
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
            <Calendar day={currentDay} onChangeDay={(day)=>{
              setCurrentDay(day);
            }
            }/>
            <Saying index={currentDay}/>

          </div>

          <div className="column column2">
            <h2>6월 {currentDay}일의 할 일</h2>
              <p></p>
           
            <RightSide dayNum={currentDay}/>
          </div>

        </div>

      <footer>
        <p>© 2023 정혜인 / Special thanks to SPARCS⚡ and <a href="https://github.com/j824h" rel="noreferrer" target="_blank">@j824h</a></p>
      </footer>
      </div>
    </>

  )
}

export default App
