import React, { useEffect, useRef } from 'react'


function UseRefHook() {
    const ageRef = useRef(null)

    useEffect(() => {
        ageRef.current.focus()
    }, [])

    return (
        <>
            <div>
                <h2>The focus will be on the age input field</h2>
                <input type="text" name='name' placeholder='Enter name....' />
                <br />
                <input ref={ageRef} type="number" name='age' placeholder='Enter age...' />
            </div>
        </>
    )
}

export default UseRefHook