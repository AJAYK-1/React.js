import React, { useState } from 'react'


function FormsInReact() {

    const [data, setData] = useState('')

    const Submission = (event) => {
        event.preventDefault()             // Prevents page refresh...
        alert(`Data submitted successfully...\n
            Your Name: ${data}`)
        setData('')                 // Reset data...
    }

    return (
        <div>
            <form onSubmit={Submission}>
                <input type="text" name='data' placeholder='Enter your name...'
                    onChange={(event) => setData(event.target.value)} />
                {/* event -> event object... */}
                {/* event.target -> input element... */}
                {/* event.target.value -> get the input... */}
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormsInReact