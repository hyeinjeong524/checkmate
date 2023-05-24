import React from "react";
import axios from "axios";
import { APIBase } from "../assets/api";

interface IAPIResponse  { _id: string, content: string, done: Boolean }

const RightSide = (props) => {
  const [ LAPIResponse, setLAPIResponse ] = React.useState<IAPIResponse[]>([]);
  const [ SNewPostContent, setSNewPostContent ] = React.useState<string>("");

    const dayNum = props.dayNum;
  
  React.useEffect( () => {
    let BComponentExited = false;
    const asyncFun = async () => {
        const { data } = await axios.get<IAPIResponse[]>(`${APIBase}/getDay/${dayNum}`);
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
        await axios.post(`${APIBase}/createItem/${dayNum}`, {content: SNewPostContent, done: false});
        setSNewPostContent("");
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  const deletePost = (id: string) => {
    const asyncFun = async () => {
        await axios.delete(`${APIBase}/deleteItem/${dayNum}/${id}`);
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  const editPost = (_id: string, _done:Boolean) => {
    const asyncFun = async () => {
        await axios.put(`${APIBase}/updateItemDone/${dayNum}`, {id: _id, done: _done});
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  return (
    <div className="Feed">
      
      <h2>Todo</h2>

      <div className="input">
            <input className="inputBox" type="text" value={SNewPostContent} placeholder="할 일을 입력하세요."
            onChange={(e)=>setSNewPostContent(e.target.value)} />
            &nbsp;&nbsp;
            <button className="inputButton" onClick={(event)=>createNewPost()}>추가</button>
      </div>

      <div className="list">
        { LAPIResponse.map( (val, i) =>
          <div key={i} className={"feed-item"}>
            <div className={"delete-item"} onClick={(e) => deletePost(`${val._id}`)}>ⓧ</div>
            <p className={"feed-body"}>{ val.content }</p>
          </div>
        ) }
      </div>

      </div>
  );
}

export default RightSide;