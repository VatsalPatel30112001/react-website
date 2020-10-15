import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Service from "./Service";
import './style.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
      </BrowserRouter>
    </>
  );
}

export default App;
