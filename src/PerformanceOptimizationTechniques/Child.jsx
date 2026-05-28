import React from 'react'


// second way  provide function before
const Child = React.memo(({ name,count }) => {
    console.log("child component rendered");

    return (
        <div>
            <h1>Child Component</h1>
        </div>
    )
})






// first way 
// export default React.memo(Child)
export default Child;