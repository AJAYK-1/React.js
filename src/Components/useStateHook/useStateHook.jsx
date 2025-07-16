import React, { useState } from 'react'


function UseStateHook() {

    // useState hook initialisation...
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1>You clicked {count} times...</h1>
                <button type='button' onClick={() => setCount(count + 1)}>Click!</button>
                {/* Updates the state variable... */}
                <button type='button' onClick={() => setCount(0)}>Reset!</button>
            </div>
        </>
    )
}

export default UseStateHook