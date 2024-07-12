import React, { useState } from 'react'

const SumCalculator = () => {
    const [sum,setsum]=useState(0);
const handlechange=(e)=>{
    const val=parseInt(e.target.value);
    console.log(val,'hi');
    if (val) {
        setsum(sum=>{
            sum+=val;
            return sum;
        });
    }
    
}
  return (
    <div>
        <h1>Sum Calculator</h1> 
        <input onChange={handlechange} type='number' placeholder='Enter a number' />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator