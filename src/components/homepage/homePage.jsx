import "./homePage.css";
import React from 'react'
export const HomePage=()=>{


    return(
        <div className="heroimg">
        <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blteda14fd8aa814927/622f0c34b130ac22c454dd92/EASTER22-BRA-mark-C-DE-HP-1600x500-154.jpg?auto=webp" alt=""/>
<div className="hero_search">

<i class="fa fa-search" id="search"></i>
<input type="text" placeholder="Where are u going?" className="search"/>

</div>
<button className="butt" id="search_but">Search</button>
<h1 className="heroimg_text">Escape the tourist traps with unforgettable travel experiences</h1>
        </div>
    )
}