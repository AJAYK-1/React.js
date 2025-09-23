import { useState } from 'react'
import './App.css'

function App() {
  const [inputs, setInputs] = useState(0)

  const handleInputs = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value })


  return (
    <>
      <div>
        <section>
          <input type="text" value={inputs} />
        </section>

        <section>
          <button onClick={handleInputs}> 1 </button>
          <button onClick={handleInputs}> 2 </button>
          <button onClick={handleInputs}> 3 </button>
          <button onClick={handleInputs}> + </button>
          <br />
          <button> 4 </button>
          <button> 5 </button>
          <button> 6 </button>
          <button> - </button>
          <br />
          <button> 7 </button>
          <button> 8 </button>
          <button> 9 </button>
          <button> / </button>
          <br />
          <button> x </button>
          <button> 0 </button>
          <button> = </button>
          <button> % </button>
          <br />
          <button> CLR </button>
        </section>
      </div>
    </>
  )
}

export default App
