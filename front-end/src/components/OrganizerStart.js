import React from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'
import OrganizerLogin from "./OrganizerLogin"
import OrganizerRegister from "./OrganizerRegister"
import styled from "styled-components"

const OrganizerStart = () => {
    const history = useHistory()

    const organizerLogin = () => {
        history.push(`/organizer/login`)
    }
    const organizerRegister = () => {
        history.push(`/organizer/register`)
    }

    return (
        <>
            <StyledDiv>
                <h2>Welcome Organizers!</h2>
                <button onClick={organizerLogin}>Log In</button>
                <button onClick={organizerRegister}>Register</button>
            </StyledDiv>
            <Switch>
                <Route path="/organizer/login">
                    <OrganizerLogin />
                </Route>
                <Route path="/organizer/register">
                    <OrganizerRegister />
                </Route>
            </Switch>
        </>
    )
}

const StyledDiv = styled.div`
* {
  border: 1px solid purple;
  margin: 2%;
  text-align: center;
}
`

export default OrganizerStart
