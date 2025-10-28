import React from 'react'

// this is child recieving props from the parent(PassProps)...
export default function UsingProps(props) {
    return (
        <div>
            <h1>Hello, {props.name}...</h1>    {/* Values recieved from props are used here... */}
        </div>
    )
}
