import "./homePage.css";
import React from 'react'
import {data }from './data'
import {HomeCard} from "../../containers/Home/homeContainer/homeContainer"
import {HomeCourousal} from "../../containers/Home/homeCourousal/homeCourousal"
import {HomeCities} from "../../containers/Home/homeCities/homeCities";
import {HomeData} from "../../containers/Home/homeCitiesData/homeData";
import {HomeLoc} from  "../../containers/Home/homeloca/homeloca";
import {HomeYou} from "../../containers/Home/homeYOU/homeYou"
export const HomePage=()=>{


    return(
      <>  <div className="heroimg">
        <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blteda14fd8aa814927/622f0c34b130ac22c454dd92/EASTER22-BRA-mark-C-DE-HP-1600x500-154.jpg?auto=webp" alt=""/>
<div className="hero_search">

<i class="fa fa-search" id="search"></i>
<input type="text" placeholder="Where are u going?" className="search"/>

</div>
<button className="butt" id="search_but">Search</button>
<h1 className="heroimg_text">Escape the tourist traps with unforgettable travel experiences</h1>
        </div>
        <div className="heda"><h1>Activities we think you would enjoy</h1></div>
        <div className="compart">
       {data.map((e)=><HomeCard data={e}/>)}
        
      
        </div>
        <div className="heda"><h1>Our favorite experiences worldwide</h1></div>
        <div className="compartt">
      
        <HomeCourousal/>
      
        </div>
        <div className="heda"><h1>Get beneath the surface of these destinations</h1></div>
        <div className="compartt">
      
        <HomeCities/>
      
        </div>
        <div className="compartt">
        <HomeData/>
        </div>
        <div className="heda"><h1>Get inspired for your next trip</h1></div>
        <div className="compartt">
      
        <HomeLoc/>
      
        </div>
        <div className="compartt">
      
      <HomeYou/>
    
      </div>
        </>
    )
}