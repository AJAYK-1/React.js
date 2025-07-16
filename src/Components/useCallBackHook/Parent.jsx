import React, { useCallback, useState } from 'react'
import Child from './Child'


function Parent() {

    const [count, setCount] = useState(0)

    const Greetings = useCallback(() => {
        console.log('Hi, I am the parent...')
    }, [])

    return (
        <div>
            <Child sayHai={Greetings} />
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Parent