import sparcsLogo from '../assets/sparcs.svg'
import "./Header.css";
import { useState } from 'react'


function Header(props) {
    const [id, setId] = useState("")
    return (<header>
            <h1>
                <a href="https://sparcs.org" target="_blank" rel="noreferrer">
                    <img src={sparcsLogo} className="logo toplogo" alt="React logo" />
                </a>
                <span className="title">Checkmate</span>
            </h1>
            <div className="login">
                <input className="loginBox" type="text" placeholder="아이디 입력"
                onChange={(event)=>{
                    setId(event.target.value)
                }} />
                &nbsp;&nbsp;
                <button className="loginButton"
                onClick={(event) => {
                    event.preventDefault();
                    props.onLogin(id);
                    }}>로그인</button>
                
            </div>
    </header>)
}
export default Header;