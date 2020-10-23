import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import GuestEvent from './GuestEvent'
import GuestProfile from "./GuestProfile"
import PrivateRoute from "../utils/PrivateRoute"
import styled from "styled-components"

const GuestDashboard = () => {
    const history = useHistory()

    const goToEvent = () => {
        history.push(`/guest/event/:id`) // change :id to template literals
    }

    const profileSetup = () => {
        history.push(`/guest/profile-setup`)
    }

    return (
    <>
            <StyledDiv>
                <h2>Welcome to Guest Dashboard!</h2>
                <h3>hope you'll save room for some 'skrat!</h3>
                <button onClick={profileSetup}>set up your profile here</button>
                <div onClick={goToEvent}>
                    <p>this is a potluck event</p>
                </div>
            </StyledDiv>
            <Route path='/guest/event/:id'>
                <GuestEvent />
            </Route> 
            <Route path='/guest/profile-setup'>
                <GuestProfile />
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


export default GuestDashboard
