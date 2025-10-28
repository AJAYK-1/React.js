import React from 'react'


const Child = React.memo(({ sayHai }) => {

    console.log('Child rendered...')

    return (
        <div>
            <h1>Hi, I am the child!!! </h1>
            <button onClick={sayHai}>Click me!</button>
        </div>
    )
})

export default Child