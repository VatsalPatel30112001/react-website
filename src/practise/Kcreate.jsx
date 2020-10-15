import React, { useState } from "react";

function Kcreate(props) {

  const [note,setnote]=useState({
      title:'',
      note:''
  })  
  const [btn,setbtn]=useState('')

  function onchange(e) {
    const name=e.target.name
    const value=e.target.value

    setnote((oldnote)=>{
        return {...oldnote,
        [name]:value}
    })
  }
  function onclick() {
    props.passnote(note)
    setnote({title:'',note:''})
  }

  return (
    <>
      <div className='creatediv'>
        <input type="text" placeholder="title" onChange={onchange} name='title' value={note.title}></input>
        <textarea type="text" placeholder="note" onChange={onchange} name='note' value={note.note}></textarea>
      <button onClick={onclick}>+</button>
      </div>
        <div>{btn}</div>
    </>
  );
}

export default Kcreate;
