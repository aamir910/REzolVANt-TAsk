import React, { useEffect, useState } from 'react'

const Mouseover = () => {
 
  const  [x, setx] = useState(0)
 const  [Y, setY] = useState(0)

 const Mouseover = (event)=>  {
    console.log('moouse event ')
        setY(event.clientX)
        setx(event.clientY) 

 }
 useEffect(
    ()=>{
         console.log("adding the event in mousemove ")
        window.addEventListener('mousemove' , Mouseover) ; 
    } , []
 )
    return (

    <div>
     X-axis : {x}
     Y-axis : {Y} 
      
    </div>
  )
}

export default Mouseover
