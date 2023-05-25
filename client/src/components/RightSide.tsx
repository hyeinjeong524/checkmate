import React from "react";
import axios from "axios";
import { APIBase } from "../assets/api";
import "./RightSide.css";

interface IAPIResponse  { _id: string, content: string, done: Boolean }

const RightSide = (props) => {
  const [ LAPIResponse, setLAPIResponse ] = React.useState<IAPIResponse[]>([]);
  const [ SNewPostContent, setSNewPostContent ] = React.useState<string>("");

    const dayNum = props.dayNum;
    const currentUser = props.currentUser;
  
  React.useEffect( () => {
    let BComponentExited = false;
    const asyncFun = async () => {
        const { data } = await axios.get<IAPIResponse[]>(`${APIBase}/getDay/${dayNum}/${currentUser}`);
        console.log(data)
        // const data = [ { id: 0, title: "test1", content: "Example body" }, { id: 1, title: "test2", content: "Example body" }, { id: 2, title: "test3", content: "Example body" } ].slice(0, NPostCount);
      if (BComponentExited) return;
      setLAPIResponse(data);
    };
    asyncFun().catch((e) => window.alert(`Error while running API Call: ${e}`));
    return () => { BComponentExited = true; }
  },[dayNum]);

  const createNewPost = () => {
    const asyncFun = async () => {
        await axios.post(`${APIBase}/createItem/${dayNum}/${currentUser}`, {content: SNewPostContent, done: false, userID: currentUser});
        setSNewPostContent("");
        const { data } = await axios.get<IAPIResponse[]>(`${APIBase}/getDay/${dayNum}/${currentUser}`);
        setLAPIResponse(data);
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  const deletePost = (id: string) => {
    const asyncFun = async () => {
        await axios.delete(`${APIBase}/deleteItem/${dayNum}/${id}`);
        const { data } = await axios.get<IAPIResponse[]>(`${APIBase}/getDay/${dayNum}/${currentUser}`);
        setLAPIResponse(data);
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  const editPost = (_id: string, _done:Boolean) => {
    const asyncFun = async () => {
      await axios.put(`${APIBase}/updateItemDone/${dayNum}`, {id: _id, nextDone: _done});

    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  LAPIResponse

  return (
    <div className="Feed">
    
      <div className="input">
            <input className="inputBox" type="text" value={SNewPostContent} placeholder="할 일을 입력하세요." required
            onChange={(e)=>setSNewPostContent(e.target.value)} />
            &nbsp;&nbsp;
            <button className="inputButton" onClick={(event)=>{
              if (SNewPostContent!=="" && props.loggedIn==true){
                createNewPost()
              }else if (SNewPostContent===""){
                alert("할 일을 입력하세요!")
              } else if (props.loggedIn==false){
                alert("로그인 후 이용해주세요.")
              }
              }}>추가</button>
      </div>

      <div className="list">
        { LAPIResponse.map( (val, i) =>
          <div key={i} className="todoItem">
            <div className="doneItem" onClick={(e)=>editPost(`${val._id}`, true)}>O</div>
            <div className="todoContent">{ val.content }</div>
            <div className="deleteItem" onClick={(e) => deletePost(`${val._id}`)}>🗑️</div>
            
          </div>
        ) }
      </div>

      </div>
  );
}

export default RightSide;