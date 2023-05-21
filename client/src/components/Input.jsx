import './Input.css'
// import axios from "axios";
// import React, { useState } from "react";
// import { APIBase } from "../assets/api";

// interface IAPIResponse = { _id: string, content: string }

// const RightSide = (props) => {

//     const [ APIResponse, setAPIResponse ] = useState([]);
//     const [ newTodoContent, setNewTodoContent ] = useState("");

//     const createNewTodo = () => {
//         const asyncFun = async () => {
//           await axios.post( APIBase + '/createItem', { content: newTodoContent } );
//           setNewTodoContent("");
//         }
//         asyncFun().catch(e => window.alert(`An error occured. Please try again. ${e}`));
//       }
      
// }

function Input(){
    return(
        <div className="input">
            <input className="inputBox" type="text" placeholder="할 일을 입력하세요." />
            &nbsp;&nbsp;
            <button className="inputButton">추가</button>
        </div>
    )
}

export default Input;