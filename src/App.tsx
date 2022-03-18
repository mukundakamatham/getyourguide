import React from 'react';
import './App.css';

import {Navbar} from "./components/navbar/navbar";
import {HomePage} from "./components/homepage/homePage";
import {HomeCard} from "./containers/homeContainer/homeContainer";
function App() {
  return (
    <div className="App">
      {/* <header >
       <Navbar/>
      </header>
      <HomePage/> */}
      <HomeCard/>
    </div>
  );
}

export default App;
