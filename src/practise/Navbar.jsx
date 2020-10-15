import React from "react";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter, NavLink, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const name = () => {
    return (
      <>
        <h1>name</h1>
      </>
    );
  };
  const Error = () => {
    return (
      <>
        <h1>Error</h1>
        <NavLink to='/'>
        go back
        </NavLink>
        <button style={{width:'150px'}}>
        </button>
      </>
    );
  };
  const services=()=>{
    return <h1>services</h1>
}
  return (
    <>
      <BrowserRouter>
      <Menu />
        <Switch>
          <Route exact path="/" render={()=><About name='abouT'/>} />
          <Route exact path="/contact/:name/:lname" component={Contact}  />
          <Route exact path='/services' component={services}/>
          <Route exact path="/contact/name" component={name} />
          {/* <Route component={Error} /> */}
          <Redirect to='/services'></Redirect>
          {/* <About /> */}
          {/* <Contact />  */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
