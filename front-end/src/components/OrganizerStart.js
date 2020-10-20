import React from 'react'
import { Switch, useHistory, Route } from 'react-router-dom'
import OrganizerLogin from "./OrganizerLogin"
import OrganizerRegister from "./OrganizerRegister";

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
                    <OrganizerLogin />
                </Route>
                <Route path="/organizer/register">
                    <OrganizerRegister />
                </Route>
            </Switch>
        </>
    )
}

export default OrganizerStart

