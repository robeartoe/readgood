import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Containers/Login';
import UserPage from './Containers/UserPage';
import Home from './Containers/Home';
import registerServiceWorker from './registerServiceWorker';

// Bootstrap:
import 'bootstrap/dist/css/bootstrap.css';

// TODO: Add more routes.
// TODO: Clean up unused vars.
ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/userpage' component={UserPage} />
      </div>
</Router>
  ,document.getElementById('root'));
registerServiceWorker();
