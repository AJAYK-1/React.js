import React from 'react'


function Child1({ SendMessage }) {
    return (
        <div>
            <h1>Hi, this is Child</h1>
            <button onClick={() => SendMessage('Message from 1st child...')} >send Message</button>
            {/* Sending data to parent (child1 -> parent) via callback function... */}
        </div>
    )
}

export default Child1