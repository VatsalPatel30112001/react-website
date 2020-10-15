import React, { useState } from "react";

function Call(props) {
    const [line,cutline]=useState(false)
    const fun=()=>{
        cutline(true)
    }
  return (
    <>
      <div id="output"> 
        <button onClick={fun}>-</button>
        <li style={{textDecoration:line?'line-through':'none'}}>{props.text}</li>
      </div>
    </>
  );
}

export default Call;
