import React from 'react'
import { useHistory, Route } from 'react-router-dom'
import GuestEvent from './GuestEvent'

const GuestDashboard = () => {
    const history = useHistory()

    const goToEvent = () => {
        history.push(`/guest/event/:id`) // change :id to template literals
    }
    return (
    <>
            <div>
                <h2>Welcome to Guest Dashboard!</h2>
                <h3>hope you'll save room for some 'skrat!</h3>
                <button>set up your profile here</button>
                <div onClick={goToEvent}>
                    <p>this is a potluck event</p>
                </div>
            </div>
            <Route path='/guest/event/:id'>
                <GuestEvent />
            </Route> 
    </>       
    )
}

export default GuestDashboard
