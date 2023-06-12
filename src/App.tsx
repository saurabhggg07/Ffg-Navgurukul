import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BlocklyComponent from "./blocklyComponent/blocklyComponent";
import SimulatorComponent from "./simulator/simulatorComponent";
import PlayerComponent from "./player/playerComponent";

function App() {
  return (
      <div style={{display:"flex", flexWrap:"wrap"}}>
      <BlocklyComponent />
      <div style={{flex: "0 1 auto"}}>
        <SimulatorComponent />
        <PlayerComponent/>
      </div>
      </div>
  );
}

export default App;
