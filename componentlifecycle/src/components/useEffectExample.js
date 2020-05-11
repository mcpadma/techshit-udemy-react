import React, { useState, useEffect } from "react";

const initXY = {
  x: null,
  y: null
};

function UseEffectExample() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);

  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);
    return () => {
      clearInterval(handle); //to clear the handle getting created every second
    };
  });
  function mousemoveHandle(e) {
    setXY({
        x:e.clientX,
        y:e.clientY
    })
  }
  useEffect(()=> {
      window.addEventListener("mousemove",mousemoveHandle);
  },[])

  return (
    <div>
      <h2>Use Effect Example</h2>
      <h3>Date and Time : {time}</h3>
      <h3>{`x:${xy.x},y:${xy.y}`}</h3>
    </div>
  );
}

export default UseEffectExample;
