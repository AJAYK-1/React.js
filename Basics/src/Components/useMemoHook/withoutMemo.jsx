import React, { useState } from 'react'

function WithoutMemo() {

    const [Count, setCount] = useState(0)

    const onButtonClick = () => {
        for (let i = 0; i <= 1000000000; i++) { }
        setCount(Count + 1)
    }

    return (
        <div>
            <h1>Count: {Count}</h1>
            <button onClick={onButtonClick}>+</button>
        </div>
    )
}

export default WithoutMemo