import React,{useState, useRef, useLayoutEffect} from 'react';

function useDim(el, val) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

useLayoutEffect(()=>{
    let boundingBox = el.current.getBoundingClientRect();
    //console.log(JSON.stringify(boundingBox));
    setHeight(boundingBox.height);
    setWidth(boundingBox.width);
}, [val]);

return { height, width };
}



function UseLayoutEffectHook() {

const [val,setVal] = useState(2);
const valEl = useRef(null);
const {height, width} =  useDim(valEl, val);
    return(
        <div>
            <header className="App-header">
            <h2>UseLayoutEffect hook</h2>
            <h3>Height: {height} , width: {width}</h3>
            <h3 ref={valEl}>{val}</h3>
            <button onClick={()=>setVal(val*10)}>Multiply</button>
            </header>
        </div>
    );
}

export default UseLayoutEffectHook;