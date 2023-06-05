import React from 'react';
import './App.css';
import Wheel from "./Wheel/Wheel";
import Screen from './Screen/Screen';
function App() {
  const style= {
    height: 280,
    width: 150,
    border: 'solid',
    borderRadius:'8px',
    position: 'relative',
    marginTop: 150,
    left: '45%'
  }
  return (
    <div className="App" style={style}>
      <Screen />
      <Wheel />
    </div>
  );
}

export default App;
