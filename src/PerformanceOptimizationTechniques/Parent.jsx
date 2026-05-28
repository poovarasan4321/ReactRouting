import React, { useState } from 'react'
import Child from './Child'



//! React.memo will work o unneccessary rendering only not for actual change
//!  you can provide this ,means child also re-render because props will change count={count}

const Parent = () => {
    console.log("parent component rendered!!!!");

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Parent Component </h1>
            <button className='border p-2' onClick={() => { setCount(count + 1) }}>Count:{count}</button>
            <hr />
            <Child name={"john"} />
        </div>
    )
}

export default Parent
