import React from 'react'

function Result(props){
    const img=`https://source.unsplash.com/500x500/?${props.name}`
    console.log(props.name)
    return <img style={{margin:'auto',display:'block'}} src={img} alt='nothing'/>
}

export default Result;