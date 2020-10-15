import React from "react";

const Return = (props) => {
  return (
    <>
      <div id="output">
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default Return;
