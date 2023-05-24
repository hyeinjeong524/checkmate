import './Input.css'
import axios from "axios";
import React, { useState } from "react";
import { APIBase } from "../assets/api";

const LAPIResponse = { _id: string, content: string }

const Input = (props) => {

    const [ APIResponse, setAPIResponse ] = useState([]);
    const [ newTodoContent, setNewTodoContent ] = useState("");

    React.useEffect( () => {
        let BComponentExited = false;
        const asyncFun = async () => {
          const { data } = await axios.get<LAPIResponse>( APIBase + `/getDay`);
          console.log(data);
          // const data = [ { id: 0, title: "test1", content: "Example body" }, { id: 1, title: "test2", content: "Example body" }, { id: 2, title: "test3", content: "Example body" } ].slice(0, NPostCount);
          if (BComponentExited) return;
          setLAPIResponse(data);
        };
        asyncFun().catch((e) => window.alert(`Error while running API Call: ${e}`));
        return () => { BComponentExited = true; }
      }, []);
    
    const createNewTodo = () => {
        const asyncFun = async () => {
          await axios.post( APIBase + '/createItem', { content: newTodoContent } );
          setNewTodoContent("");
        }
        asyncFun().catch(e => window.alert(`An error occured. Please try again. ${e}`));
      }



      
    return(
        <div className="input">
            <input className="inputBox" type="text" placeholder="할 일을 입력하세요." />
            &nbsp;&nbsp;
            <button className="inputButton">추가</button>
        </div>
    )
}


    
export default Input;