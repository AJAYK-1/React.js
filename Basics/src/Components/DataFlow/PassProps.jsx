
import React from 'react'
import UsingProps from './UsingProps'

// This is Parnet passing value to child(UsingProps)...
export default function PassProps() {
    return (
        <div>
            <UsingProps name='World' />      {/* Values are passed to props from here... */}
            <UsingProps name='Ajay' />
            <UsingProps name='Siri' />
        </div>
    )
}
