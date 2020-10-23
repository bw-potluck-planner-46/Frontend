import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import OrganizerEvent from './OrganizerEvent'
import OrganizerProfile from "./OrganizerProfile"
import PrivateRoute from "../utils/PrivateRoute"
import styled from "styled-components"

const OrganizerDashboard = () => {
    const history = useHistory()

    const goToEvent = () => {
        history.push(`/organizer/event/:id`) // change :id to template literals
    }

    const profileSetup = () => {
        history.push(`/organizer/profile-setup`)
    }

    return (
    <>
            <StyledDiv>
                <h2>Welcome to Organizer Dashboard!</h2>
                <h3>hope you'll save room for some 'skrat!</h3>
                <button onClick={profileSetup}>set up your profile here</button>
                <div onClick={goToEvent}>
                    <p>this is a potluck event</p>
                </div>
            </StyledDiv>
            <Route path='/organizer/event/:id'>
                <OrganizerEvent />
            </Route> 
            <Route path='/organizer/profile-setup'>
                <OrganizerProfile />
            </Route>
             
    </>       
    )
}

const StyledDiv = styled.div`
* {
  border: 1px solid purple;
  margin: 2%;
  text-align: center;
  display: flex;
  justify-content : center;
}
`


export default OrganizerDashboard
