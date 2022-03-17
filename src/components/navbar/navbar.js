import React from "react"
import "./navbar.css"
export const Navbar=()=>{
    return (
        <header className="navbar ">
            <ul >
                <li>
                    <img className="logoimg" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/GetYourGuide_company_logo.png" alt=""/>
                </li>
                </ul>
               <ul  className="navbar_f">
                <li>
                 <div className="dropdown">
                  <button className="dropbtn">English
                 <i className="fa fa-caret-down" id="spa"></i>
                 </button>
                 <div className="dropdown-content ">
                  <a href="#a" >All languages</a>
                  <hr className="hr" />
                 <div className="languages">
                 <ul><li> <a href="#a">English</a></li>
                    <li><a href="#a">Dansk</a></li>
                    <li> <a href="#a">Duetsch</a></li>
                    <li> <a href="#a">French</a></li>
                      </ul> 
                     <ul>
                       <li> <a href="#a">Japaneese</a></li>
                      <li> <a href="#a">Mandarine</a></li>
                      <li> <a href="#a">Viatnamese</a></li>
                          <li> <a href="#a">Hindhi</a></li>
                       </ul>
                      </div>
                     </div>
                   </div>
                </li>
                <li>
                <div className="dropdown">
                <button className="dropbtn">INR($)
                <i className="fa fa-caret-down" id="spa"></i>
                 </button>
                 <div className="dropdown-content ">
                  <a href="#a">Top currencies</a>
                  <hr className="hr"/>
                 <div className="languages ">
                 <ul><li> <a href="#a">Rupees ($)</a></li>
                    <li><a href="#a">Dollers ($)</a></li>
                  
                      </ul> 
                      <ul><li> <a href="#a">Yuvan (#)</a></li>
                    <li><a href="#a">Penny (*)</a></li>
                    
                      </ul> 
                     <ul>
                       <li> <a href="#a">Cents (&)</a></li>
                      <li> <a href="#a">Rubel (@)</a></li>
                   
                       </ul>
                      </div>
                      <a href="#a">All currencies</a>
                      <hr className="hr" />
                 <div className="languages ">
                 <ul><li> <a href="#a">Link 2</a></li>
                    <li><a href="#a">Link 3</a></li>
                    <li> <a href="#a">Link 22</a></li>
                    <li> <a href="#a">Link 33</a></li>
                      </ul> 
                      <ul><li> <a href="#a">Link 2</a></li>
                    <li><a href="#a">Link 3</a></li>
                    <li> <a href="#a">Link 22</a></li>
                    <li> <a href="#a">Link 33</a></li>
                      </ul> 
                     <ul>
                       <li> <a href="#a">Link 22</a></li>
                      <li> <a href="#a">Link 33</a></li>
                      <li> <a href="#a">Link 22</a></li>
                          <li> <a href="#a">Link 33</a></li>
                       </ul>
                      </div>
                     </div>
                   </div>
                </li>
            <li> <div className="dropdown">
                <button className="dropbtn">
               Help 
                 </button></div></li>
                 <li> <div className="dropdown"><button className="dropbtn">Cart 
                 </button></div></li>
                 <li> <div className="dropdown"><button className="dropbtn">Wish List 
                 </button></div></li>
          

            <li>
                
                 <div className="dropdown">
                  <button className="dropbtn">Login
                 <i className="fa fa-caret-down"id="spa"></i>
                 </button>
                 <div className="dropdown-contentt ">
               
                 <div className="languagess ">
                 <ul><li> <a href="#a">Log In</a></li>
                
                    <li><a href="#a">History</a></li>
                    <li> <a href="#a">Appearance</a></li>     
                    <li> <a href="#a">Download App</a></li>
                   

                      </ul> 
                      </div>
                      </div>
                      </div>
                      </li>
                      <li>
                          <button className="butt">Sign up</button>
                      </li>
            </ul>
        </header>
    )
}