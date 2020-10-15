import React from "react";
import Name from "./Name";

function Card(props) {
  return (
    <div>
      <div>
        <ol>
          <Name name={props.name} />
          <li>{props.age}</li>
          <li>{props.degree}</li>
        </ol>
      </div>
    </div>
  );
}

export default Card;
