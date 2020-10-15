import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import "./index2.css";
import Clock from "react-digital-clock";

const Incredecre = () => {
  const [item, setitem] = useState(0);
  const incre = () => {
    setitem(item + 1);
  };
  const decre = () => {
    if (item > 0) {
      setitem(item - 1);
    } else {
      alert("MAXIMUM DECREMENT REACHED");
    }
  };
  return (
    <>
      <div className="container">
        <Clock />
        <div id="card">
          <h1>{item}</h1>
          <Button className="Buttonhover" onClick={incre}>
            <AddIcon />
          </Button>
          <Button className="Buttonhover" onClick={decre}>
            <DeleteIcon />
          </Button>
          {/* <Clock /> */}
        </div>
      </div>
    </>
  );
};

export default Incredecre;
