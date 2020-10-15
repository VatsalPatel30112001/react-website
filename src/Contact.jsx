import React, { useState } from "react";

function Contact() {
  const [name, setname] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const onchange = (e) => {
      const {name,value}= e.target

      setname((olddata)=>{
          return{ ...olddata,[name]:value}
      })
  };
  const onClick = (e) => {
      e.preventDefault();
      alert(`your name is ${name.name} ,phone number is ${name.phone} and email id is ${name.email}`)
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Contact</h1>
      <div className="contact">
        <input
          name="name"
          type="text"
          placeholder="enter your name"
          onChange={onchange}
        ></input>
        <input
          name="phone"
          type="text"
          placeholder="enter your phone-number"
          onChange={onchange}
        ></input>
        <input
          name="email"
          type="text"
          placeholder="enter your email-id"
          onChange={onchange}
        ></input>
        <input
          className="btn"
          style={{ textAlign: "center" }}
          type="submit"
          onClick={onClick}
        ></input>
      </div>
    </>
  );
}

export default Contact;
