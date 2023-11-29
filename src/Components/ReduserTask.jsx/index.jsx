import React, { useReducer } from 'react'
import './index.css'

function reduse(state, action) {
    switch (action.type) {
        case "count/inc":
            return { ...state, count: (state.count + action.payload) }
        case "count/dec":
            return { ...state, count: (state.count - action.payload) }
        default:
            return state;
    }
}

const ReduserTask = () => {
    const [state, dispatch] = useReducer(reduse, { count: 0 })
    function handleIncrease(payload) {
        dispatch({ type: "count/inc", payload })
    }
    function handleDecrease(payload) {
        dispatch({ type: "count/dec", payload })
    }
 
    return (
        <div className='counter'>
            <p>{state.count}</p>
            <div className="btn">
            <button onClick={() => handleIncrease(1)} >+</button>
            <button onClick={() => handleDecrease(1)}>-</button>
            </div>
        </div>
    )
}

export default ReduserTask