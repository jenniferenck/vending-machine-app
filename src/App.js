import React, { Component } from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import { Route, Switch } from 'react-router-dom';
import Soda from './Soda.js';
import Sardines from './Sardines.js';
import Chips from './Chips.js';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/sardines" render={() => <Sardines />} />
          <Route exact path="/chips" render={() => <Chips />} />
        </Switch>
      </div>
    );
  }
}

export default App;
