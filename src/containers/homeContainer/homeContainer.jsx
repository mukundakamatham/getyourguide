import React, { useState } from 'react';
import "./homeContainer.scss"
export const HomeCard=(datas)=>{
let data={
    img:'https://cdn.getyourguide.com/img/mic/crop-tour-277-a161e9a60b0847f3.jpeg/wide_320_uncropped_q50.webp',
    symbol:"",
    header:"From Lasvegas :Grand canyon tour with helicopter with champane",
    pickup:true,
    duration:"4 hours",
    stars:"4.9",
    reviews:"100",
    button:"Adventure",
    buttonColour:'teal',
    skipTheline:false,
    price:"$234",
}

    return (
        <div className="homeContainer">
         <div><img src={data.img} alt=""/></div> 
         <div className="homecard">
         <div><h3>{data.header}</h3></div>
         {data.pickup?<p>Pickup available</p>:null}
         {data.duration.length>0?<p>Estimated duration {data.duration}</p>:null}
         {data.skipTheline?<p>skip the line available</p>:null}
          <button style={{backgroundColor:data.buttonColour}}>{data.button}</button>
          <div  className="last"> <div><span> <div className="Stars" style={{"--rating": data.stars}} aria-label="Rating of this product is 2.3 out of 5.">
          </div> </span> <span>{data.stars}</span><span>({data.reviews}reviews)</span> </div>
          <p>From {data.price} OnWards</p>
          </div>
          </div>
        </div>
    )
}

/* 
          
          
        
     
          */