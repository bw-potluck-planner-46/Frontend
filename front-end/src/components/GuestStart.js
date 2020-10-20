import React from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

const GuestStart = () => {
    const history = useHistory()

    const loginRoute = () => {
        history.push(`/guest/login`)
    }
    const registerRoute = () => {
        history.push(`/guest/register`)
    }
    return (
        <div>
            <h2>Welcome Guest!</h2>
            <button onClick={loginRoute}>Log In</button>
            <button onclick={registerRoute}>Register</button>
        <Switch>
            <Route exact path="/guest/login" component={Login} />
            <Route exact path="/guest/register" component={Register} />
        </Switch>
        </div>
    )
}

export default GuestStart
