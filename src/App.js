import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'


import MyTours from './toursRendered'

function App() {
 
     
  return (
    <main>
      <h1>Destinations To Explore</h1>
      <MyTours />
      
    </main>
  );
}

export default App;
