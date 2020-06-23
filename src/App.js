/* eslint-disable no-unused-expressions */
import React from 'react';

import Nav from './Nav';
import Regular from './Regular';
import Generator from './Generator';
import Hot from './Hot';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/hot" component={Hot}/>
      <Route path="/generator" component={Generator}/>
      <Route path="/regular" component={Regular}/>
      </Switch>
    </div>
    </Router>
  );
}




export default App;
