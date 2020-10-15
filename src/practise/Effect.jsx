import React, { useEffect, useState } from "react";

function Effect() {
    const [name,setname]=useState(0)
    const [name2,setname2]=useState(0)
    useEffect(()=>{document.title=`you clicked ${name}`},[name])
  return (
    <>
      <h1>hello {name} {name2}</h1>
      <button onClick={()=>{
          setname(name+1);
      }}>one</button>
      <button onClick={()=>{
          setname2(name2+1);
      }}>two</button>
    </>
  );
}

export default Effect;
