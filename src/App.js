import logo from './logo.svg';
import React from 'react';
import './App.css';
import Weather from './Weather';
 const API = "https://api.weather.gov/"



function App() {
  return (
    <div className="App">
      <Weather className="App-header"/>
    </div>
  );
}

export default App;
