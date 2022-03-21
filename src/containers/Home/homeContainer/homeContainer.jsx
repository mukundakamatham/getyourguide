import React, { useState } from 'react';
import "./homeContainer.scss"
export const HomeCard=({data})=>{


    return (
        <div className="homeContainer">
         <div><img src={data.img} alt=""/></div> 
         <i class="fa fa-heart-o" id="icon_heart" ></i>
         <div className="homecard">
        <h4>{data.header}</h4>
         <div id="homecarddet">{data.pickup?<p>Pickup available</p>:null}
         {data.duration.length>0?<p>Estimated duration {data.duration}</p>:null}
         {data.skipTheline?<p>skip the line available</p>:null}
         </div> <button style={{backgroundColor:data.buttonColour}}>{data.button}</button>
          <div  className="last">
               <div> <span> <div className="Stars" style={{"--rating": data.stars}} aria-label="Rating of this product is 2.3 out of 5.">
          </div> </span> 
          <span>{data.stars}</span>
          <span>({data.reviews}reviews)</span> </div>
          <p>From {data.price} OnWards</p>
          </div>
          </div>
        </div>
    )
}

/* 
          
          
        
     
          */