import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Containers/Home';
import registerServiceWorker from './registerServiceWorker';

// Bootstrap:
import 'bootstrap/dist/css/bootstrap.css';
//FontAwesome:
var FontAwesome = require('react-fontawesome');

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
