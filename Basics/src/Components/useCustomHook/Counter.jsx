import React from 'react'
import useCounter from './useCounter'


function Counter() {
  const { count, increase, decrease, reset } = useCounter()

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
      <button onClick={reset}> Reset </button>
    </>
  )
}

export default Counter