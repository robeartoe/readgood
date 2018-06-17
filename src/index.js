import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainMenu from './containers/MainMenu';
import LoginForm from './containers/LoginForm';
import SignupForm from './containers/SignupForm';
import UserPage from './containers/UserPage';
import AddBook from './containers/AddBook';
import EditBook from './containers/EditBook';
import Settings from './containers/Settings'

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
        <Route path='/EditBook' component={EditBook} />
        <Route path='/Settings' component={Settings} />
      </div>
</Router>
  ,document.getElementById('root'));
registerServiceWorker();
