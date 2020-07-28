import React, {useState} from 'react';
import usePrevious from '../hooks/usePrevious';

function UsePreviousHook() {
    const [age,setAge] = useState(21);
    const previousAge = usePrevious(age);
    return (
        <div>
            <h2>UsePrevious Custom Hook</h2>
            <h3>Current age: {age}</h3>
            <button onClick={()=>setAge(age-1)}>Make me younger</button>
            <h3>Previous age: {previousAge}</h3>
        </div>
    )
}

export default UsePreviousHook;