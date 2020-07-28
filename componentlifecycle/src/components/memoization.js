import React, { useState, useEffect, useMemo } from 'react';
import MemoChild from './memoChild';

function Memoization() {
    const [i,setI] = useState(0);

    function onClickHandle() {
        setI(i+1);
    }
    const memoChildHook = useMemo(() => {
        return <MemoChild></MemoChild>
    },[i])
    //memo render not incrementing based on i value
    // const memoChildHook = useMemo(() => {
    //     return <MemoChild></MemoChild>
    // },[])
    return (
        <div>
            <h2>Memoization</h2>
            <h3>i:{i}</h3>
            <button onClick={onClickHandle}>Increment I</button>
            <h3>normal render</h3>
            <MemoChild></MemoChild>
            <h3>Memo render</h3>
            {memoChildHook}
        </div>
    )
}

export default Memoization;