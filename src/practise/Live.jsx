import React, { useState } from 'react'
import Result from './Result'

function Live(){
    const [name,setname]=useState('')

    const onchange=(e)=>{
        setname(e.target.value)
    }
    // console.log(name)
    return (
        <>
            <input style={{margin:'auto',display:
            'block'}} onChange={onchange} placeholder='search here'></input>
            {name===''?null: <Result name={name}/>}
        </>
    )
}

export default Live;