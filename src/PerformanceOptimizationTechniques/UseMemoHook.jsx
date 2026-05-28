import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    //! heavy calculation 
    //* useMemo () hook what difference means useEffect render after component rendering then useMemo with component rendering 


    const [count, setCount] = useState(0);
    const [text, setText] = useState("")
    console.log("text", text);


    const expensiveCalculation = (num) => {

        console.log("calculation is running...... ");

        return num * 1000
    }

    // const result = expensiveCalculation(count);   all the time will re rendering 

    // it will return memozied value
    let result = useMemo(() => {
        return expensiveCalculation(count);
    }, [count])

    return (
        <div>
            <h1>Use Memo Hook ()</h1>
            <button onClick={() => setCount(count + 1)}>Count:{count}</button>
            <hr />
            <h1>result : {result}</h1>
            <input type="text" onChange={(e) => { setText(e.target.value) }} className='border' />
        </div>
    )
}

export default UseMemoHook
