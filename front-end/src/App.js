import React from "react";
import Login from "./components/Login";
import UserDashboard from "./Private/UserDashboard";
import Private from "./utils/PrivateRoute";
import Register from "./components/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Plan A Potluck</h1>
          <Route exact path="/" component={Login} />
        </header>
        <Register />
        <div className="attendee">
          <Private path="/protected" component={UserDashboard} />
          {/* <Potluck /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
