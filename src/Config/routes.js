// This Routes file will be for node and express.
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Containers/Home';
import Login from '../Containers/Login';

import registerServiceWorker from '../registerServiceWorker';


var Routes = (
  <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </div>
  </Router>
)

module.exports= Routes;
