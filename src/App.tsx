import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BlocklyComponent from "./blocklyComponent/blocklyComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountLogin from "./login/accountLogin";
import CodeBurn from "./codeBurning/CodeBurn";


function App() {
  return (
<Router>
      <Switch>
          <Route exact path="/" component={AccountLogin}/>
        <Route exact path="/blockly-home"
          component={BlocklyComponent} />
          <Route exact path="/code-burn"
                 component={CodeBurn} />
      </Switch>
    </Router>
  );
}

export default App;
