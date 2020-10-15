import React from 'react'
import Common from './Common'
import img from './img/lion.jpg'

function Service(){
    return(
        <>
            <Common img={img} link='/about' page={'Service'}/>
        </>
    )
}

export default Service; 