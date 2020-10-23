import React from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'
import GuestLogin from "./GuestLogin"
import GuestRegister from "./GuestRegister"
import styled from "styled-components"

const GuestStart = () => {
    const history = useHistory()

    const guestLogin = () => {
        history.push(`/guest/login`)
    }
    const guestRegister = () => {
        history.push(`/guest/register`)
    }

    return (
        <>
            <StyledDiv>
                <h2>Welcome Guest!</h2>
                <button onClick={guestLogin}>Log In</button>
                <button onClick={guestRegister}>Register</button>
            </StyledDiv>
            <Switch>
                <Route path="/guest/login">
                    <GuestLogin />
                </Route>
                <Route path="/guest/register">
                    <GuestRegister />
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

export default GuestStart
