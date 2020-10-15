import React, { useState } from "react";
import Kcreate from "./Kcreate";
import Kshow from "./Kshow";

function Knote() {
  const [additem, setitemna] = useState([]);
  const addnote = (note) => {
    setitemna((olddate) => {
      return [...olddate, note];
    });
    console.log(note);
  };
  const deleteo = (id) => {
    //   alert('boom')
      // setitem((prevdata)=>{
      //     prevdata.filter((val,index)=>{
      //         return index!==id;
      //     })
      // })
      setitemna((old)=>{
        old.filter((val,inde)=>{
          return val!== inde;
        })
      })
  };
  return (
    <>
      <Kcreate passnote={addnote} />
      {additem.map((val, index) => {
        return (
          <Kshow
            key={index}
            id={index}
            title={val.title}
            note={val.note}
            ondelete={deleteo}
          />
        );
      })}
    </>
  );
}

export default Knote;
