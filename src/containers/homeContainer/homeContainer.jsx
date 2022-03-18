import React, { useState } from 'react';
//import "./homeContainer.scss"
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
    buttonColour:'black',
    skipTheline:false,
    price:"$234",
}

    return (
        <div className="homeContainer">
          <img src={data.img} alt=""/>
          <h2>{data.header}</h2>
          {data.pickup?<h6>Pickup available</h6>:null}
          {data.duration.length>0?<h6>Estimated duration {data.duration}</h6>:null}
          {data.skipTheline?<h6>skip the line available</h6>:null}
          <button style={{backgroundColor:data.buttonColour}}>{data.button}</button>
          <div className="Stars" style={{"--rating": 2.3}} aria-label="Rating of this product is 2.3 out of 5."></div> 
        </div>
    )
}