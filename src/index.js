import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainMenu from './Containers/MainMenu';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import UserPage from './Containers/UserPage';
import AddBook from './Containers/AddBook';
import registerServiceWorker from './registerServiceWorker';

// Bootstrap:
import 'bootstrap/dist/css/bootstrap.css';

// TODO: Add more routes.
// TODO: Clean up unused vars.
ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={LoginForm} />
        <Route path='/userpage' component={UserPage} />
        <Route path='/Signup' component={SignupForm} />
        <Route path='/AddBook' component={AddBook} />

      </div>
</Router>
  ,document.getElementById('root'));
registerServiceWorker();
