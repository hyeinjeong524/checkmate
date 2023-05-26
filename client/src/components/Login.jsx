import { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import { APIBase } from '../assets/api';

function Login(props) { //get props from App.jsx to set the loggedin and username
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.get(`${APIBase}/findID`, { params: { username, password } });

      if (response.data.exists) { // if username already exists
        const loginResponse = await axios.post(`${APIBase}/login`, { username, password });
        if (loginResponse.status === 200) {
          props.onLogin(username);
          props.onChangeDay(1);
        } else {
          alert("ID 혹은 비밀번호가 올바르지 않습니다. 신규 유저인 경우 다른 아이디를 사용해주세요.");
        }
      } else {
        const signUpResponse = await axios.post(`${APIBase}/signup`, { username, password });
        if (signUpResponse.status === 201) {
          props.onLogin(username);
          props.onChangeDay(1);
          alert("계정 생성 성공!")
        } else {
          alert("계정 생성에 실패했습니다");
        }
      }

    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("ID 혹은 비밀번호가 올바르지 않습니다. 신규 유저인 경우 다른 아이디를 사용해주세요.");
      } else {
        console.error(error);
        alert("로그인 시도 중 에러가 발생했습니다. 아이디와 비밀번호를 확인하고 다시 시도해 주세요.");
      }
    }
  }


  const getLoginComponent = () => {
    let loginComponent = null;

    if (props.loggedIn) {
      loginComponent = <div className="loginText"><p>{username}님 로그인 중 (새로고침하여 로그아웃)</p></div>
    } else {
      loginComponent = <div>
        <input className="usernameBox" type="text" placeholder="아이디 입력"
          onChange={(event) => {
            setUsername(event.target.value)
          }} />
        &nbsp;
        <input className="passwordBox" type="password" placeholder="비밀번호 입력"
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        &nbsp;&nbsp;
        <button className="loginButton"
          onClick={(event) => {
            event.preventDefault();
            login();
          }}>로그인</button>
      </div>
    }
    return loginComponent;
  }



  return (
    <div className="login">{getLoginComponent()}</div>
  );
}

export default Login;