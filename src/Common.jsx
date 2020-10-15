import React from "react";
import {NavLink} from 'react-router-dom'

function Common(props) {
  return (
    <>
      <div className="hometext">
        <h1>welcome to {props.page} page</h1>
        <h1>
          start your buiness with
          <span style={{ color: "blue" }}> vatsal patel</span>
        </h1>
        <NavLink to={props.link}>
          <button className="btn">get started</button>
        </NavLink>
        <img id='img1' className='cow' src={props.img} />
      </div>
    </>
  ); 
}

export default Common;
