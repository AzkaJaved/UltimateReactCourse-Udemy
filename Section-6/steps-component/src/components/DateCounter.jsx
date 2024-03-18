import React from "react";
import { useState } from "react";

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  let date = new Date();
  date.setDate(date.getDate() + count);
  let handleReset = () => {
    setCount(0);
    setStep(1);
  };
  return (
    <div>
      <input
        type="range"
        min={0}
        max={16}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>Step: {step}</span>
      <br />
      <br />
      <button onClick={() => setCount(count - step)}>-</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + step)}>+</button>
      <p>
        {count == 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </p>
      {count != 0 || step != 1 ? (
        <div>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
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
