import React, { useReducer } from 'react'


const initialState = { count: 0 };

const countReducer = (state, action) => {
    switch (action.type) {
        case '+': return { count: state.count + 1 };
            break;
        case '-': return { count: state.count - 1 }
            break;
        case 'reset': return { count: 0 }
            break
        default: return state
    }

}

function UseReducerSample() {

    const [state, dispatch] = useReducer(countReducer, initialState)

    return (
        <div>
            <h1> useReducer </h1>
            <h1> Count: {state.count} </h1>
            <button onClick={() => dispatch({ type: '+' })}> + 1 </button>
            &nbsp;
            <button onClick={() => dispatch({ type: '-' })}> - 1 </button>
            &nbsp;
            <button onClick={() => dispatch({ type: 'reset' })}> RESET </button>
        </div>
    )
}

export default UseReducerSample