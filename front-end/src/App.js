import React from 'react';
import Login from './components/Login';
import UserDashboard from './Private/UserDashboard';
import Private from './utils/PrivateRoute';
import Register from './components/Register';

import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';

const StyledApp = styled.body`
background-color: rebeccapurple;
padding-bottom: 50%;
`
const StyledHeader = styled.header`
margin-left: 43%;
color: fuchsia;
`


function App() {
  return (
    <Router>
      <StyledApp>
      <div className="App">
      <StyledHeader>
        <header className="App-header">
          <h1>Plan A Potluck</h1>
          <Route exact path="/" component={Login} />
        </header>
        </StyledHeader>
        <Register />
        
        <div className="attendee">
          <Private path="/protected" component={UserDashboard} />
        {/* <Potluck /> */}
        </div>
      </div>
      
      </StyledApp>
    </Router>

  );
}

export default App;
