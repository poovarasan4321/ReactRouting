import React, { useCallback, useState } from 'react'
import CallBackchild from './CallBackchild'

const CallBackParent = () => {


    //! sate 
    const [count, setCount] = useState(0);

    console.log("parent rendered ");


    //! here will create will be created only once 
    //* But if you pass the dependency the function will recreated for each and evry change
    
    let handleClick = useCallback(() => {
        console.log("button is clicked");

    }, [])

    return (
        <div>
            <h1>Call Back hook  ()  </h1>
            <button className='border p-2 bg-blue-400 text-white' onClick={() => setCount(count + 1)} >Count: {count}</button>

            <hr />
            <CallBackchild handleClick={handleClick} />
        </div >
    )
}

export default CallBackParent
