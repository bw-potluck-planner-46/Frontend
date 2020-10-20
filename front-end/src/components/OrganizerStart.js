import React from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"

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
            <div>
                <h2>Welcome Organizer!</h2>
                <button onClick={organizerLogin}>Log In</button>
                <button onClick={organizerRegister}>Register</button>
            </div>
            <Switch>
                <Route path="/organizer/login">
                    <Login />
                </Route>
                <Route path="/organizer/register">
                    <Register />
                </Route>
            </Switch>
        </>
    )
}

export default OrganizerStart

