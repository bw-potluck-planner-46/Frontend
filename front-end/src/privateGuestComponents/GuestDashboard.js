import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import GuestEvent from './GuestEvent'
import GuestProfile from "./GuestProfile"
import PrivateRoute from "../utils/PrivateRoute"

const GuestDashboard = () => {
    const history = useHistory()

    const goToEvent = () => {
        history.push(`/guest/event/:id`) // change :id to template literals
    }

    const profileSetup = () => {
        history.push(`/guest/profile-setup`)
    }

    return (
    <>
            <div>
                <h2>Welcome to Guest Dashboard!</h2>
                <h3>hope you'll save room for some 'skrat!</h3>
                <button onClick={profileSetup}>set up your profile here</button>
                <div onClick={goToEvent}>
                    <p>this is a potluck event</p>
                </div>
            </div>
            <Route path='/guest/event/:id'>
                <GuestEvent />
            </Route> 
            <Route path='/guest/profile-setup'>
                <GuestProfile />
            </Route>
             
    </>       
    )
}

export default GuestDashboard
