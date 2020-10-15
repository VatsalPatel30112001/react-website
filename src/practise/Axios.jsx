import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [name, setname] = useState("");
  const [p,sp]=useState('')
  const [p2,sp2]=useState('')
  function onchange(e) {
    setname(e.target.value);
  }
  useEffect(() => {
    async function asy() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      console.log(res.data);
      sp(res.data.name)
    //   sp2(res.data.moves.length)
    }
    asy();
  });
  return (
    <>
      <h1>{p}</h1>
      <h1>{p2}</h1>
      <h1>hello guys {name}</h1>
      <select value={name} onChange={onchange}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default Axios;
