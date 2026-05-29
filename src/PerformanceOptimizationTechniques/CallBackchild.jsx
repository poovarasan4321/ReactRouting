import React from 'react'
import { memo } from 'react'
    

const CallBackchild = ({ handleClick }) => {
    console.log("child rendered!!!1")
    return (
        <div>
            <h1>Child</h1>
            <button className='border p-1 bg-blue-600 text-white' onClick={handleClick}>Click</button>
        </div>
    )
}

export default React.memo(CallBackchild)
