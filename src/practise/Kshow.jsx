import React from 'react'

function Kshow(props){

    const deleteone=()=>{
        props.ondelete(props.id)
    }

    return(
        <>
        <div>
            <h1>{props.title}</h1>
            <p>{props.note}</p>
            <button onClick={deleteone}>-</button>
        </div>
        </>
    )
}

export default Kshow;