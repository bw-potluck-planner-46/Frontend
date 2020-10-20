import React from 'react'
import {useHistory, Switch, Route} from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"

const OrganizerStart = () => {
    const history = useHistory()

    const loginRoute = () => {
        history.push(`/organizer/login`)
    }
    const registerRoute = () => {
        history.push(`/organizer/register`)
    }
    return (
        <div>
            <h2>Welcome Organizer!</h2>
            <button onClick={loginRoute}>Log In</button>
            <button onclick={registerRoute}>Register</button>
            <Switch>
            <Route exact path="/organizer/login" component={Login} />
            <Route exact path="/organizer/register" component={Register} />
        </Switch>
        </div>
    )
}

export default OrganizerStart
