import React, { useState } from 'react'
import { Suspense } from 'react'

//! Lazy Loading + Code Splitting it should be outside the function 
// const LazyComponent = React.lazy(() => import("./LazyFolder/LazyComponent"))


//! lazy loading + code splitting real time  

const LazyComponent = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import("./LazyFolder/LazyComponent"))
        }, 3000)
    })
})


const MainComponent = () => {


    const [show, setShow] = useState(false);

    return (
        <div className='border gap-5  mx-auto my-20 bg-blue-400 text-white rounded  w-1/2 h-100 flex flex-col items-center'>

            <h1>Main component</h1>

            <button onClick={() => setShow(!show)}

                className='text-lg bg-green-600 text-white rounded cursor-pointer px-6 py-2'

            >{show ? "remove" : "show"} Component</button>


            {/* {show && <LazyComponent />} */}

            <Suspense fallback={<img src='../../' alt='loading...' />}>

                {show && <LazyComponent />}

            </Suspense>

        </div>
    )
}

export default MainComponent
