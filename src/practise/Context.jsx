import React, { createContext } from "react";
import Comp from "./Comp";

const fname = createContext();
const lname = createContext();
function Context() {
  return (
    <fname.Provider value={"vatsal"}>
      <lname.Provider value={"patel"}>
        <Comp />
      </lname.Provider>
    </fname.Provider>
  );
}

export default Context;
export { fname,lname };
