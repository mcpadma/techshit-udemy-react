import React,{useState} from 'react';

function Hooks() {
    const [age, setAge] = useState(21);
    const ageUpHandle = () => {
        setAge(age + 1);
    }
    const ageDownHandle = () => {
        setAge(age - 1);
    }
    return (
        <>
        <h2>Age: {age}</h2>
        <div>
            <button onClick = {ageUpHandle}>Age UP</button>
            <button onClick = {ageDownHandle}>Age Down</button>
        </div>
        </>
    )
}
export default Hooks;