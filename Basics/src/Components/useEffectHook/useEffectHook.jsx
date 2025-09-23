import React, { useEffect, useState } from 'react'


function UseEffectHook() {

    const [Click, setClick] = useState(0)

    useEffect(() => {
        console.log('This is a render (useEffect)...')

        return () => {
            console.log('This runs on second render (This is return statement)...')
        }
    }, [Click])

    return (
        <div>
            <h1>See the console...!</h1>
            <button type='button' onClick={() => setClick(Click + 1)} >Click!</button>
        </div>
    )
}

export default UseEffectHook