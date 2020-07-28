import React, {useEffect} from 'react';

let renderCount = 0;

function MemoChild() {
    useEffect(()=>{
        renderCount++;
    })
    return(
        <>
           <h3>rendercount: {renderCount}</h3> 
        </>
    )
}
export default MemoChild;