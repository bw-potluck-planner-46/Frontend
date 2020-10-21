import React from 'react'
import {Switch, useHistory, Route} from 'react-router-dom'
import GuestStart from "./GuestStart"
import OrganizerStart from "./OrganizerStart"

const LandingPage = () => {
    const history = useHistory()

    const guestRoute = () => {
        history.push(`/guests`)
    }

    const organizerRoute = () => {
        history.push(`/organizers`)
    }
    
    return (
        <div>
            <h1>Welcome to PotLuck Planner!</h1>
            <h2>Guests click here</h2>
            <button onClick={guestRoute}>Guests</button>
            <h2>Organizers click here</h2>
            <button onClick={organizerRoute}>Organizers</button>
            <Switch>
                <Route path="/guests" component={GuestStart} />

                <Route path="/organizers" component={OrganizerStart} />
            </Switch>
        </div>
    )
}

export default LandingPage
