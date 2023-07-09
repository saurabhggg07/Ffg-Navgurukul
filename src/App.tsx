import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BlocklyComponent from "./blocklyComponent/blocklyComponent";
import SimulatorComponent from "./simulator/simulatorComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountLogin from "./login/accountLogin";


function App() {
  return (
<Router>
      <Switch>
          <Route exact path="/" component={AccountLogin}/>
        <Route exact path="/blockly-home"
          component={BlocklyComponent} />

        <Route exact path="/virtual-circuit"
          component={SimulatorComponent} />
      </Switch>
    </Router>
  );
}

export default App;
