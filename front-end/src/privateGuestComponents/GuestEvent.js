import React from 'react'
import {useState} from "react"
import styled from 'styled-components'

const GuestEvent = (props) => {

    const [attend, setAttend] = useState(0)
    const [toggle, setToggle] = useState(true)

    console.log("event props", props)
    const rsvp =(event) => {
        setToggle(!toggle)
        toggle === true? (setAttend(attend+1)) : (setAttend(attend-1))
    }

    return (
        <StyledDiv>
            <h2>this is a event</h2>
            <h3>attendance: {attend}</h3>
            <button onClick={rsvp}> attend!</button>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
* {
  border: 1px solid purple;
  margin: 2%;
  text-align: center;
}
`

export default GuestEvent
