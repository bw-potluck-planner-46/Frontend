import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import OrganizerEvent from './OrganizerEvent'
import OrganizerProfile from "./OrganizerProfile"

const OrganizerDashboard = () => {
    const history = useHistory()

    const goToEvent = () => {
        history.push(`/organizer/event/:id`) // change :id to template literals
    }

    const profileSetup = () => {
        history.push(`/organizer/profile-setup`)
    }

    return (
    <>
            <div>
                <h2>Welcome to Organizer Dashboard!</h2>
                <h3>hope you'll save room for some 'skrat!</h3>
                <button onClick={profileSetup}>set up your profile here</button>
                <div onClick={goToEvent}>
                    <p>this is a potluck event</p>
                </div>
            </div>
            <Route path='/organizer/event/:id'>
                <OrganizerEvent />
            </Route> 
            <Route path='/organizer/profile-setup'>
                <OrganizerProfile />
            </Route> 
    </>       
    )
}

export default OrganizerDashboard
