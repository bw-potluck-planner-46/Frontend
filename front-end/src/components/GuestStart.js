import React from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'
import GuestLogin from "./GuestLogin"
import GuestRegister from "./GuestRegister"

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
            <div>
                <h2>Welcome Guest!</h2>
                <button onClick={guestLogin}>Log In</button>
                <button onClick={guestRegister}>Register</button>
            </div>
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

export default GuestStart
