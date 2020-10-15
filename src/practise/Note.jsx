import React, { useState } from "react";
import Call from "./Call";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
// import Call from './Call'
const Note = () => {
  const [name, setname] = useState("");
  const [btn, setbtn] = useState([]);
  const input = (e) => {
    setname(e.target.value);
  };
  const click = () => {
    setbtn((oldvalues) => {
        return [...oldvalues, name];
    });
    setname('')
  };
  return (
    <>
      <div className="container">
        <div id="card">
          <h1 className='my-3 '>add hari</h1>
          <input onChange={input} value={name} placeholder="enter hari's name"></input>
          <button onClick={click}>+</button>
          <div>
            {btn.map((val,index) => {
              return <Call key={index} text={val}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
