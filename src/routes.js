import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Login from './components/AuthPages/Login';
import Signup from './components/AuthPages/Signup';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>
);
