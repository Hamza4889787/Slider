import React, { useState } from 'react'
import "../App.css"

function Slider() {

    const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ];

    const [current,setCurrent] = useState(0);


    const handleClick=(e)=>{
       if(e == "right")
        {
            setCurrent(current === images.length-1?0:current+1)
        }else if(e == "left"){
            setCurrent(current === 0 ?images.length-1:current-1)
        }
            }
              

    return (


    <div id='Slider'>
        <h1>Slider</h1>
        <div className='container'>
      <button onClick={()=> handleClick("left")}><i  className='left fas fa-angle-left'></i></button>
     {
        images.map((imageVal,index)=>{
       return  current === index && (
            <div className='slide-show'><img src={imageVal} alt='slider image'/></div>
         )
        })
     }

      <button onClick={()=> handleClick("right")}><i  className='right fas fa-angle-right'></i></button>
     
    </div>
    <div className='Slides'>
        {
            images.map((img,index)=>{
               return <img key={index} className={current === index ? "nofade": "fade"}  src={img} />
            })
        }
      </div>
    </div>
  )
}

export default Slider
