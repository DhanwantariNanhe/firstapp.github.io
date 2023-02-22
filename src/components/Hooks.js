import React, { useState } from 'react'

function Hooks() {

    const [count, setCount] = useState(0);

    const countUp = ()=>{

        setCount(count + 1);
    }

    const countDown = () =>{

        setCount(count - 1);
    }

  return (
    
    <>
    <button onClick={countUp}>Inc Count</button>
    <h1>{count}</h1>
    <button onClick={countDown}>Dec Count</button>
    </>
    
  );
}

export default Hooks