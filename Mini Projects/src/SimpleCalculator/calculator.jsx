import React, { useState } from 'react'
import { buttonValues } from './calcButtons'
import Arithmetics from './arithmetics'

function Calculator() {
    const [inputs, setInputs] = useState('')

    const handleInput = (value) => {
        if (value === 'Del') {
            const newinput = inputs.slice(0, -1)
            setInputs(newinput)
        } else if (value === '=') {
            const output = Arithmetics(inputs)
            setInputs(output)
        } else {
            const newInput = inputs + value
            setInputs(newInput)
        }
    }

    return (
        <div className='calculator'>
            <div >
                <input type="text" value={inputs} className='screen' readOnly />
            </div>

            <div className='button-grid'>
                {buttonValues.map((value, index) =>
                    <button
                        key={index}
                        onClick={() => handleInput(value)}
                        className='calc-buttons'> {value} </button>
                )}
            </div>
        </div>
    )
}

export default Calculator