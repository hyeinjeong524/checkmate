import React from "react";
import axios from "axios";
import { APIBase } from "../assets/api";
import "./RightSide.css";

interface IAPIResponse { _id: string, content: string, done: Boolean }

const RightSide = (props) => {
  const [LAPIResponse, setLAPIResponse] = React.useState<IAPIResponse[]>([]);
  const [SNewPostContent, setSNewPostContent] = React.useState<string>("");

  const dayNum = props.dayNum;
  const currentUser = props.currentUser;
  const loggedIn = props.loggedIn;

  const readPosts = () => {
    const asyncFun = async () => {
      const { data } = await axios.get<IAPIResponse[]>(`${APIBase}/getDay/${dayNum}/${currentUser}`);
      setLAPIResponse(data);
    };
    asyncFun().catch((e) => window.alert(`Error while running API Call: ${e}`));
  }

  React.useEffect(() => {
    let isComponentMounted = true; // changed the variable name for clarity
    readPosts();
    return () => {
      isComponentMounted = false;
    };
  }, [dayNum, currentUser]);

  const createNewPost = () => {
    const asyncFun = async () => {
      await axios.post(`${APIBase}/createItem/${dayNum}/${currentUser}`, { content: SNewPostContent, done: false, userID: currentUser });
      setSNewPostContent("");
      readPosts();
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  const deletePost = (id: string) => {
    const asyncFun = async () => {
      await axios.delete(`${APIBase}/deleteItem/${dayNum}/${id}`);
      readPosts();
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  const editPost = (_id: string, _done: Boolean) => {
    const asyncFun = async () => {
      await axios.put(`${APIBase}/updateItemDone/${dayNum}`, { id: _id, nextDone: _done });
      readPosts();
    }
    asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
  }

  const getDoneList = () => {
    let yet: IAPIResponse[] = [];
    let done: IAPIResponse[] = [];
    LAPIResponse.forEach((val) => (val.done ? done : yet).push(val));
    const yetList = yet.map((val, i) =>
      <div key={i} className="todoItem">
        <div className="yetButton" onClick={(e) => editPost(`${val._id}`, true)}> ◯ </div>
        <div className="yetContent">{val.content}</div>
        <div className="deleteItem" onClick={(e) => deletePost(`${val._id}`)}>🗑️</div>
      </div>
    )
    const doneList = done.map((val, i) =>
      <div key={i} className="todoItem">
        <span className="doneButton" onClick={(e) => editPost(`${val._id}`, false)}> 🟠 </span>
        <span className="doneContent">{val.content}</span>
        <span className="deleteItem" onClick={(e) => deletePost(`${val._id}`)}>🗑️</span>
      </div>
    )
    return (
      <React.Fragment>
        {yetList}
        {doneList}
      </React.Fragment>
    )

  }

  return (
    <div className="Feed">

      <div className="input">
        <input className="inputBox" type="text" value={SNewPostContent} placeholder="할 일을 입력하세요." required
          onChange={(e) => setSNewPostContent(e.target.value)} />
        &nbsp;&nbsp;
        <button className="inputButton" onClick={(event) => {
          if (SNewPostContent !== "" && props.loggedIn == true) {
            createNewPost()
          } else if (SNewPostContent === "") {
            alert("할 일을 입력하세요!")
          } else if (props.loggedIn == false) {
            alert("로그인 후 이용해주세요.")
          }
        }}>추가</button>
      </div>

      <div className="listBox">
        {getDoneList()}
      </div>

    </div>
  );
}

export default RightSide;