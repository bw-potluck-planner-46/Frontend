import React from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"

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
                    <Login />
                </Route>
                <Route path="/guest/register">
                    <Register />
                </Route>
            </Switch>
        </>
    )
}

export default GuestStart
