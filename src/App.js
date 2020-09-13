import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';
import Reports from './Reports.js';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Me</Link>
          </li>
          <li>
            <Link to="/reports/week/1">Week 1</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Me} />
      <Route path="/reports/week/:weekNumber" component={Reports} />
    </div>
  </Router>
);

export default App;
