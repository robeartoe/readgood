import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainMenu from './Containers/MainMenu';
import LoginForm from './Containers/LoginForm';
import SignupForm from './Containers/SignupForm';
import UserPage from './Containers/UserPage';
import AddBook from './Containers/AddBook';
import Settings from './Containers/Settings'

import registerServiceWorker from './registerServiceWorker';

// Bootstrap:
import 'bootstrap/dist/css/bootstrap.css';

// TODO: Add more routes.
// TODO: Clean up unused vars.
// TODO: The default should be the userpage. EXCEPT when the user is not logged in, then they should be directed to the Login Page.
ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={UserPage} />
        <Route path='/Login' component={LoginForm} />
        <Route path='/Signup' component={SignupForm} />
        <Route path='/AddBook' component={AddBook} />
        <Route path='/Settings' component={Settings} />
      </div>
</Router>
  ,document.getElementById('root'));
registerServiceWorker();
