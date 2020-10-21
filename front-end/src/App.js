
import React from 'react';
import LandingPage from "./components/LandingPage"
import GuestStart from "./components/GuestStart"
import OrganizerStart from "./components/OrganizerStart"

import { BrowserRouter as Route, Switch, useHistory } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: rebeccapurple;
padding-bottom: 50%;
`
const StyledHeader = styled.header`
margin-left: 43%;
color: fuchsia;
`
const App = () => {
  const history = useHistory()

  const guestRoute = () => {
    history.push(`/guest`)
  }
  const organizerRoute = () => {
    history.push(`/organizer`)
  }
  return (
    
    <>
        <Switch>
              <Route exact path="/">
                <StyledDiv>
                <StyledHeader><h1>Welcome to PotLuck Planner!</h1></StyledHeader>
                <h2>Guests click here</h2>
                <button onClick={guestRoute}>Guests</button>
                <h2>Organizers click here</h2>
                <button onClick={organizerRoute}>Organizers</button>
                </StyledDiv>
              </Route>
            
          <Route path="/guest">
            <GuestStart />
          </Route>

          <Route path="/organizer">
            <OrganizerStart />
          </Route>
        </Switch>
    </>
  )
}
export default App
