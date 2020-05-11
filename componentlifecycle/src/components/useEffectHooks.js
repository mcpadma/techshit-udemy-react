import React, {useState, useEffect} from 'react';

let born = false;

function UseEffectHooks(){
    const [growth, setGrowth] = useState(0);
    const [nir, setNir] = useState(false);

    useEffect(() => {
        console.log("I am born");
    },[]);

    useEffect(() => {
        if(born){
            document.title="new topic changed";
        }
    },[nir]);

    useEffect(() => {
        if( born) {
          console.log("Iam re born")
        }
        else {
          born = true;
        }
        if(growth > 70){
          setNir(true);
        }
        return function cleanUp(){
          console.log("Clean before birth");
        }
      });
    
      function growHandle() {
        setGrowth(growth + 10);
      }
    return (
        <>
        <h2>Use Effect Hooks</h2>
        <h3>Growth: {growth}</h3>
        <button onClick={growHandle}>learn and grow</button>
        </>
    )
}
export default UseEffectHooks;