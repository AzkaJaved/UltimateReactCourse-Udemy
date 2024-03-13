import React from "react";
import { useState } from "react";

const DateCounter = () => {
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);
let date = new Date();
date.setDate(date.getDate()+count)



  return (
    <div>
      <button onClick={()=>setStep(step-1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={()=>setStep(step+1)}>+</button>
      <br /><br />
      <button onClick={()=>setCount(count-step)}>-</button>
      <span>Count: {count}</span>
      <button onClick={()=>setCount(count+step)}>+</button>
      <p>
        {count==0?'Today is': count>0? `${count} days from today is `:`${Math.abs(count)} days ago was `}{date.toDateString()}
      </p>
    </div>
  );
};

export default DateCounter;
// //get day name
// let dayName;
// if(dayOfWeek==0){
//     dayName='sunday'
// }
// else if(dayOfWeek==1) dayName ='monday';
// else if(dayOfWeek==2) dayName = 'tuesday';
// else if(dayOfWeek==3) dayName ='wednesday';
// else if(dayOfWeek==4) dayName = 'thursday';
// else if(dayOfWeek==5) dayName = 'friday';
// else if(dayOfWeek==6) dayName = 'saturday'
// // console.log(dayName);
