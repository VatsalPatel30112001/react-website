import React, { useContext } from "react";
import { fname, lname } from "./Context";

function Comp2() {
   const name= useContext(fname)
   const name2= useContext(lname)
  return (
    <>
      {/* <fname.Consumer>
        {(name) => {
          return (
            <lname.Consumer>
              {(name2) => {
                return (
                  <h1>
                    hey hari {name} {name2}
                  </h1>
                )
              }}
            </lname.Consumer>
          )
        }}
      </fname.Consumer> */}
      <h1>hello hari {name} {name2}</h1>
    </>
  );
}

export default Comp2;
