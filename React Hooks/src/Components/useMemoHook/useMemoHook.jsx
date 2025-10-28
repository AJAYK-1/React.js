import React, { useMemo, useState } from 'react'

function UseMemoHook() {

    const [count, setCount] = useState(0)

    const result = useMemo(() => {
        console.log('Only re-rendered when value changes...')
        for(let i =0;i<=100000000;i++) {}
        return count+1
    }, [count])

  return (
    <div>
        <h1>Count: {result} </h1>
        <button onClick={() => setCount(count+1)} >+</button>
    </div>
  )
}

export default UseMemoHook