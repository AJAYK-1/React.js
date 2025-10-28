import React, { useState } from 'react'
import Child from './Child'


function WithoutuseCallback() {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log('Hello there....!')
    }

    return (
        <div>
            <Child sayHai={handleClick} />
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default WithoutuseCallback