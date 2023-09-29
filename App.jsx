import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    function App() {
      return (
        <Router>
          <div>
            <h1>React Router Colors</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/blue">Blue</Link>
                </li>
                <li>
                  <Link to="/red">Red</Link>
                </li>
              </ul>
            </nav>
    
            <Switch>
              <Route path="/blue">
                {/* You can create a Blue component or simply put JSX here */}
                <div style={{ backgroundColor: 'blue', height: '100vh' }}>Blue</div>
              </Route>
              <Route path="/red">
                {/* Same goes for Red */}
                <div style={{ backgroundColor: 'red', height: '100vh' }}>Red</div>
              </Route>
            </Switch>
          </div>
        </Router>
      );
