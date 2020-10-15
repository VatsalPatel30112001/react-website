import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const Contact = () => {
  const { name, lname } = useParams();
  const location = useLocation();
  const history=useHistory()
    console.log(location.pathname)
    console.log(history)
  return (
    <>
      <h1>
        Contact {name}  {lname}
        {location.pathname==='/contact/vatsal/patel' ? <button style={{width:'100px'}} onClick={()=>{
            // history.push('/services')
            history.goBack('')
        }}>go back</button>:null}
      </h1>
    </>
  );
};

export default Contact;
