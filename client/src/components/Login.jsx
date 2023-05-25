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
          alert("Invalid username or password - if you're new, the id is already occipied");
        }
      } else {
        const signUpResponse = await axios.post(`${APIBase}/signup`, { username, password });
        if (signUpResponse.status === 200) {
          props.onLogin(username);
          props.onChangeDay(1);
        } else {
          alert("Failed to create new account");
        }
      }

    } catch (error) {
        console.error(error);
    }
}


  return (
    <div className ="login">
      <input className="usernameBox" type="text" placeholder="아이디 입력"
                onChange={(event)=>{
                    setUsername(event.target.value)
                }} />
        &nbsp;
      <input className="passwordBox" type="text" placeholder="비밀번호 입력"
                onChange={(event)=>{
                    setPassword(event.target.value)
                }} />
      &nbsp;&nbsp;
        <button className="loginButton"
                onClick={(event) => {
                    event.preventDefault();
                    login();
                    }}>로그인</button>
                    
    </div>
  );
}

export default Login;