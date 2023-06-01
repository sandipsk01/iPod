import React from 'react';
import './App.css';
import Wheel from "./Wheel/Wheel";
import Screen from './Screen/Screen';
function App() {
  const style= {
    height: 370,
    width: 200,
    border: 'solid',
    align: 'centre'
  }
  return (
    <div className="App" style={style}>
      <Screen />
      <Wheel />
    </div>
  );
}

export default App;
