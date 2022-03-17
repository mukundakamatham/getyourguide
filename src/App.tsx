import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {HomePage} from "./components/homepage/homePage";
function App() {
  return (
    <div className="App">
      <header >
       <Navbar/>
      </header>
      <HomePage/>
    </div>
  );
}

export default App;
