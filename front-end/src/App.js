
import React from 'react';

import FoodImage from './components/FoodImage'

import GuestStart from "./components/GuestStart"
import GuestLogin from "./components/GuestLogin"
import GuestRegister from "./components/GuestRegister"
import GuestDashboard from "./privateGuestComponents/GuestDashboard"
import GuestProfile from "./privateGuestComponents/GuestProfile"
import GuestEvent from './privateGuestComponents/GuestEvent'
import PrivateRoute from "./utils/PrivateRoute"

import OrganizerStart from "./components/OrganizerStart"
import OrganizerLogin from "./components/OrganizerLogin"
import OrganizerRegister from "./components/OrganizerRegister"
import OrganizerDashboard from "./privateOrganizerComponents/OrganizerDashboard"
import OrganizerProfile from "./privateOrganizerComponents/OrganizerProfile"
import OrganizerEvent from './privateOrganizerComponents/OrganizerEvent'

import PotluckCreate from './Private/PotluckCreate'
import UserDashboard from "./Private/UserDashboard"

import { BrowserRouter as Route, Switch, useHistory } from "react-router-dom";
import styled from 'styled-components';


const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeader = styled.header`
color: #867EBA;
`

const StyledRouteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2%;
`

const StyledGuestAndOrganizerContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2%;
`

const StyledH2 = styled.h2`
  color: #867EBA;
`

const StyledButton = styled.button`
    margin-top: 2%;
    font-size: 1rem;
    width: 25%;
    height: 3vh;
    background-color: #867EBA;
    border: none;
    border-radius: 50px;
    outline: none;
    &:hover{
        cursor: pointer;
        background-color: #7E7E7E;
        transform: scale(1.1);
    }
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
            <StyledAppContainer>
              <StyledHeader>
                <h1>Welcome to PotLuck Planner!</h1>
              </StyledHeader>
              <StyledRouteContainer>
                <StyledGuestAndOrganizerContainer>
                  <StyledH2>Guests click here</StyledH2>
                  <StyledButton onClick={guestRoute}>Guests</StyledButton>
                </StyledGuestAndOrganizerContainer>
                <StyledGuestAndOrganizerContainer>
                  <StyledH2>Organizers click here</StyledH2>
                  <StyledButton onClick={organizerRoute}>Organizers</StyledButton>
                </StyledGuestAndOrganizerContainer>
              </StyledRouteContainer>
              <FoodImage />
            </StyledAppContainer>
          </Route>

          <Route path="/userprofile">
            <UserDashboard />
          </Route>

          <Route path="/addpotluckform">
            <PotluckCreate />
          </Route>

          <PrivateRoute path="/guest/event/:id" component={GuestEvent} />

          <PrivateRoute path="/guest/profile-setup" component={GuestProfile} />

          <PrivateRoute path="/guest/dashboard" component={GuestDashboard} />
          
          {/* <Route path = "/guest/dashboard">
            <GuestDashboard />
          </Route> */}

          <Route path = "/guest/register">
            <GuestRegister />
          </Route>

          <Route path="/guest/login">
            <GuestLogin />
          </Route>  

          <Route path="/guest">
            <GuestStart />
          </Route>

          <PrivateRoute path="/organizer/event/:id" component={OrganizerEvent} />

          <PrivateRoute path="/organizer/profile-setup" component={OrganizerProfile} />

          <PrivateRoute path="/organizer/dashboard" component={OrganizerDashboard} />

          {/* <Route path="/organizer/dashboard">
            <OrganizerDashboard />
          </Route> */}

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
