
import React from 'react';

import GuestStart from "./components/GuestStart"
import GuestLogin from "./components/GuestLogin"
import GuestRegister from "./components/GuestRegister"
import GuestDashboard from "./privateGuestComponents/GuestDashboard"

import UserDashboard from "./Private/UserDashboard"

import OrganizerStart from "./components/OrganizerStart"
import OrganizerLogin from "./components/OrganizerLogin"
import OrganizerRegister from "./components/OrganizerRegister"
import OrganizerDashboard from "./privateOrganizerComponents/OrganizerDashboard"

import { BrowserRouter as Route, Switch, useHistory } from "react-router-dom";
import styled from 'styled-components';
import PotluckCreate from './Private/PotluckCreate';

const StyledDiv = styled.div`
background-color: rebeccapurple;
padding-bottom: 50%;
`
const StyledHeader = styled.header`
margin-left: 35%;
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
              <StyledHeader>
                <h1>Welcome to PotLuck Planner!</h1>
              </StyledHeader>
                <h2>Guests click here</h2>
                <button onClick={guestRoute}>Guests</button>
                <h2>Organizers click here</h2>
                <button onClick={organizerRoute}>Organizers</button>
              </StyledDiv>
          </Route>

          <Route path="/userprofile">
            <UserDashboard />
          </Route>

          <Route path="/addpotluckform">
            <PotluckCreate />
          </Route>

          <Route path="/guest/dashboard">
            <GuestDashboard />
          </Route>

          <Route path = "/guest/register">
            <GuestRegister />
          </Route>

          <Route path="/guest/login">
            <GuestLogin />
          </Route>  

          <Route path="/guest">
            <GuestStart />
          </Route>

          <Route path="/organizer/dashboard">
            <OrganizerDashboard />
          </Route>

          <Route path = "/organizer/register">
            <OrganizerRegister />
          </Route>

          <Route path="/organizer/login">
            <OrganizerLogin />
          </Route> 

          <Route path="/organizer">
            <OrganizerStart />
          </Route>
        </Switch>
    </>
  )
}
export default App
