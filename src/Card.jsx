import React from "react";

function Card(props) {
    console.log(props)
  return (
    <>
        <div className="card">
            <img src={props.img} alt='nothing'/>
            <p>{props.title}</p>
        </div>
    </>
  );
}

export default Card;
