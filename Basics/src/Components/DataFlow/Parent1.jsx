import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'


function Parent1() {

    const [Message1, setMessage1] = useState('')
    const [Message2, setMessage2] = useState('')

    const handleMessage1 = (msg) => {
        setMessage1(msg)
    }

    const handleMessage2 = (msg) => {
        setMessage2(msg)
    }

    return (
        <div>
            <Child1 SendMessage={handleMessage1} />
            <Child2 sendMessage2={handleMessage2} />
            <h1>This is Parent!!!</h1>
            <h3>{Message1}</h3>
            <h3>{Message2}</h3>
        </div>
    )
}

export default Parent1