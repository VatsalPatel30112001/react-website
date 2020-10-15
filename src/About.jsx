import Card from "./Card";
import React, { useState } from "react";
import Array from "./Array";

function About() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About us</h1>
      <div className="container">
        {Array.map((val, index) => {
          return <Card img={val.img} key={index}/>;
        })}
      </div>
    </>
  );
}

export default About;
