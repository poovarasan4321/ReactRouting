import React, { useReducer } from 'react'

//! Step -1 create initial state 
const initialState = {
    count: 0,
}

//! step -2 create reducer function 
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 }

        case "Decrement":
            return { count: state.count - 1 }

        case "Reset":
            return { count: 0 }

        default:
            return state;

    }


};



const Counter = () => {

    //! useReducer hook 
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("state", state);



    return (
        <div>
            <h1>Count : {state.count}</h1>
            <button onClick={() => dispatch({ type: "Increment" })}>Increment</button> &nbsp;
            <button onClick={() => dispatch({ type: "Decrement" })}>Decrement </button> &nbsp;
            <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>

        </div>
    )
}

export default Counter
