import React from 'react'


function Child2({ sendMessage2 }) {
    return (
        <div>
            <h1>This is child 2...</h1>
            <button onClick={() => sendMessage2('Hi, I am 2nd child...')}>send Message</button>
            {/* Sending data to parent (child2 -> parent) via callback function... */}
        </div>
    )
}

export default Child2