import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlocklyComponent from "./blocklyComponent/blocklyComponent";
import SimulatorComponent from "./simulator/simulatorComponent";
import PlayerComponent from "./player/playerComponent";

function App() {
  return (
      <div style={{display:"flex"}}>
      <BlocklyComponent />
      <div style={{flex:1}}>
        <SimulatorComponent/>
        <PlayerComponent/>
      </div>
      </div>
  );
}

export default App;
