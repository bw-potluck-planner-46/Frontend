import React from 'react'
import {useState} from "react"

const GuestEvent = () => {
    const [attend, setAttend] = useState(0)
    const [toggle, setToggle] = useState(true)


    const rsvp =(event) => {
        setToggle(!toggle)
        toggle === true? (setAttend(attend+1)) : (setAttend(attend-1))
    }

    return (
        <div>
            <h2>this is a event</h2>
            <h3>attendance: {attend}</h3>
            <button onClick={rsvp}> attend!</button>
        </div>
    )
}

export default GuestEvent
