import { useState } from 'react'
import './App.css'
import Calendar from './components/Calendar.jsx'
import Saying from './components/saying'
import RightSide from './components/RightSide'  
import Header from './components/Header'

function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const [currentUser,setCurrentUser] = useState("Guest");
  const [loggedIn, setLoggedIn] = useState(false);

  let message="";
  if (loggedIn===false){
    message=<h3>로그인 후 이용해주세요.</h3>
  }else{
    message=<h3>{currentUser}님, 오늘은 무엇을 하실 예정인가요?</h3>
  }

   

  return (//헤더 분리해서 로그인 칸이랑 버튼 만들고 app에 state 추가해야함 (로그인된 계정이름)
  //또 not signed in이면 추가 안되게 alert보내야함
    <>
    <div className='App'>
        <Header onLogin={(user)=>{
          setCurrentUser(user);
          setLoggedIn(true);
        }}/>

        <div className="wrapper">
          <div className="column column1">
            <p className="instruction">
              {message}
            </p>
            <Calendar day={currentDay} onChangeDay={(day)=>{
              setCurrentDay(day);
            }
            }/>
            <Saying index={currentDay}/>

          </div>

          <div className="column column2">

            <h2>6월 {currentDay}일의 할 일 ({currentUser})</h2>
            <RightSide dayNum={currentDay} loggedIn={loggedIn}/>
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
