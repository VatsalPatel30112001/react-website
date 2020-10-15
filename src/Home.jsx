import React from "react";
import img from './img/cartoon.jpg'
import Common from "./Common";
function Home() {
  return (
    <>
      <Common img={img} link='/service' page={'Home'}/>
    </>
  );
}

export default Home;
