import React, { useState, useEffect } from 'react'

const RoomStateCurrent = (props) => {
    const [stateVariable, setStateVariable] = useState('');
    useEffect(() => {'http://localhost:8080/adria/001'
        // send HTTP request
        // save response to variable
    }, [])
    return (
        <div>
            <h1>This is a function component view</h1>
        </div>
    )
}