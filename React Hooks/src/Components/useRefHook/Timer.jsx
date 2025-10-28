import React, { useRef, useEffect, useState } from 'react'


function Timer() {

    const [time, settime] = useState(0)
    const timeRef = useRef(0)

    useEffect(() => {

        timeRef.current = setInterval(() => {
            settime((time) => time + 1)
        }, 1000);
        console.log('This only runs once....')
        return () => {
            clearInterval(timeRef.current) 
        }
    }, [])

    return (
        <div>
            <h1 >Timer: {time} </h1>
            <button onClick={() => clearInterval(timeRef.current)}>Stop Timer</button>
        </div>
    )
}

export default Timer    