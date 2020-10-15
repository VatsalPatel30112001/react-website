// import React from "react";
// const Slotm = (props) => {
//   // let x = props.x;
//   // let y = props.y;
//   // let z = props.z;

//   let {x,y,z}=props;
//   if (x === y && y === z) {
//     return (
//       <>
//         this is matching
//         <h1>
//           {x}
//           {y}
//           {z}
//         </h1>
//       </>
//     );
//   } else {
//     return (
//       <>
//         this is not matching
//         <h1>
//           {x}
//           {y}
//           {z}
//         </h1>
//       </>
//     );
//   }
// };

// function App() {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>slot machine</h1>
//       <Slotm x='a' y='b' z='c' />
//       <Slotm x='a' y='a' z='a'/>
//       <Slotm x='a' y='v' z='c'/>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// const button = {
//   background: "red",
//   color: "white",
//   height: "50px",
//   width: "150px",
//   borderRadius: "5px",
//   border: "none",
//   outline: "none",
// };
// function App() {
//   const [ccount, setcount] = useState("SHREE HARI");
//   const [bg, setbg] = useState("black");
//   // cosnt [dbl,setdbl]=useState('')
//   const style = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: bg,
//   };
//   function updatetime() {
//     setbg("green");
//     setcount("JAY SWAMINARAYAN");
//   }
//   function dblclick() {
//     setbg('white')
//     setcount('NARNARAYAN DEV')
//   }
//   return (
//     <>
//       <div style={style}>
//         <button style={button} onMouseEnter={dblclick} onMouseLeave={updatetime}>
//           {ccount}
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useCallback, useState } from "react";

// function App() {
//   const button = {
//     background: "red",
//     color: "white",
//     height: "50px",
//     width: "150px",
//     borderRadius: "5px",
//     border: "none",
//     outline: "none",
//     display: "block",
//   };
//   const style = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100vw",
//     height: "100vh",
//     margin: "10px",
//     // backgroundColor: bg,
//   };
//   const input = {
//     height: "30px",
//     width: "200px",
//     margin: "10px",
//   };
//   const [name, setname] = useState("");
//   const [another,setanother]=useState('');
//   const [fullname, setfullname] = useState("");

//   function inputevent(e) {
//     setname(e.target.value);
//   }
//   function inputevent2(e) {
//     setanother(e.target.value);
//   }
//   function click(e) {
//     e.preventDefault();
//     console.log("clicked");
//     setfullname(name+' '+another);
//   }
//   return (
//     <>
//       <div style={style}>
//         <form onSubmit={click}>
//           <h1>HELLO HARI {fullname}</h1>
//           <input
//             onChange={inputevent}
//             style={input}
//             placeholder="enter your god name"
//             value={name}
//             type="text"
//           ></input>
//           <input
//             onChange={inputevent2}
//             style={input}
//             placeholder="enter your god name2"
//             // value={name}
//             type="text"
//           ></input>
//           <button type='submit' style={button}>
//             SUBMIT
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// const App = () => {
//   const style = {
//     width: "100vw",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "pink",
//     color: "white",
//   };
//   const input = {
//     width: "200px",
//     height: "40px",
//     border: "none",
//     backgroundColor: "none",
//     margin: "10px",
//     textAlign: "center",
//     outline: "none",
//     borderRadius: "15px",
//   };
// const button = {
//   width: "80px",
//   height: "38px",
//   backgroundColor: "none",
//   border: "none",
//   outline: "none",
//   borderRadius: "10px",
// };

// setclick((prevalue)=>{
//   if(name=='fname'){
//     // setclick.fname=value;
//     setclick.lname=prevalue;
//   }
//   else if(name=='lname'){
//     // setclick.lname=value;
//     setclick.fname=prevalue;
//   }
// })
// };
// const [click,setclick]=useState('')
// const [name, setname] = useState({
//   fname: "",
//   lname: "",
//   email: ''
// });
// const submit = (e) => {
//   e.preventDefault();
//   setclick(name.fname+' '+name.lname + ' '+ name.email)
// };
// const InputEvent = (e) => {
//   console.log(e.target.value);
//   console.log(e.target.name);

//   const value = e.target.value;
//   const name = e.target.name;

//   setname((prevalue) => {

//     return{
//       ...prevalue,
//       [name]:value
//     }
// if (name == "fname") {
//   return {
//     fname: value,
//     lname: prevalue.lname,
//     email: prevalue.email,
//   };
// } else if (name == "lname") {
//   return {
//     fname: prevalue.fname,
//     lname: value,
//     email: prevalue.email,
//   };
// } else if (name == "email") {
//   return {
//     fname: prevalue.fname,
//     lname: prevalue.lname,
//     email: value,
//   };
// }
// });
// };

//   return (
//     <>
//       <form onSubmit={submit}>
//         <div style={style}>
//           <h1>HEY HARI {click}</h1>
//           <input
//             style={input}
//             name="fname"
//             type="text"
//             onChange={InputEvent}
//             placeholder="enter your god name"
//             value={name.fname}
//           ></input>
//           <input
//             style={input}
//             name="lname"
//             type="text"
//             onChange={InputEvent}
//             placeholder="enter your god name"
//             value={name.lname}
//           ></input>
//           <input
//             style={input}
//             name="email"
//             type="text"
//             onChange={InputEvent}
//             placeholder="enter your email name"
//             value={name.email}
//           ></input>
//           <button style={button} type="submit">
//             submit
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const style = {
//     width: "100vw",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "pink",
//     color: "white",
//   };
//   const input = {
//     width: "200px",
//     height: "40px",
//     border: "none",
//     backgroundColor: "none",
//     margin: "10px",
//     textAlign: "center",
//     outline: "none",
//     borderRadius: "15px",
//   };
//   const button = {
//     width: "80px",
//     height: "38px",
//     backgroundColor: "none",
//     border: "none",
//     outline: "none",
//     borderRadius: "10px",
//   };
//   const [name, setname] = useState({
//     fname: "",
//     lname: "",
//   });
//   const changeevent = (e) => {
//     console.log(e.target.value);
//     console.log(e.target.name);
//     const value = e.target.value;
//     const name = e.target.name;

//     setname((preValue) => {
//       return{
//         ...preValue,
//         [name]:value
//       }
// if (name == "fname") {
//   return {
//     fname: value,
//     lname: preValue.lname,
//   };
// } else {
//   return {
//     fname: preValue.fname,
//     lname: value,
//   };
// }
// });

// };
//   const [clickb, setclick] = useState("");
//   function click(e) {
//     e.preventDefault();
//     setclick( name.fname  + " " +  name.lname );
//   };
//   return (
//     <>
//       <form onSubmit={click}>
//         <div style={style}>
//           <h1>hey hari {clickb}</h1>
//           <input
//             style={input}
//             type="text"
//             placeholder="enter your name"
//             name="fname"
//             onChange={changeevent}
//           ></input>
//           <input
//             style={input}
//             type="text"
//             placeholder="enter your name"
//             name="lname"
//             onChange={changeevent}
//           ></input>
//           <button style={button} type="submit">
//             SUBMIT
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./index.css";
import Return from './Return'

function App() {
  const [item, setitem] = useState("");
  const [btn, setbtn] = useState([]);

  const InputEvent = (e) => {
    setitem(e.target.value);
  };
  const fire = () => {
    setbtn((olditem) => {
      return [...olditem, item];
    });
    setitem("");
  };
  const deleteitem = (id) => {
    setbtn((olditem)=>{
      return olditem.filter((arrelem,index)=>{
        return index !== id;
      })
    })
  };
  return (
    <>
      <div className="container">
        <div id="card">
          <h1>TO DO LIST</h1>
          <input
            type="text"
            onChange={InputEvent}
            placeholder="add item"
            value={item} type='name'
          ></input>
          <button onClick={fire}>+</button>

          <div>
            {btn.map((inputval, index) => {
              return (<Return key={index} id={index} onSelect={deleteitem} text={inputval} />);
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
