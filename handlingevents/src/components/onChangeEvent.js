import React, {useState} from 'react';
import './onChangeEventStyles.css';

function OnChangeEvent() {
const [name,setName]= useState("default");
const [income, setIncome] = useState("high");
function handleNameChange(e) {
    setName(e.target.value);
}
function handleIncomeChange(e) {
    setIncome(e.target.value);
}
function onSubmitHandle() {
    console.log("state =", name, income);
}
    return(
        <div>
            <h3>onChangeEvent</h3>
            <form onSubmit={onSubmitHandle}>
                <div>
                    <span>Name:</span>
                    <input value={name} type="text" onChange={handleNameChange}></input>
                </div>
                <div>
                    <span>Income:</span>
                    <select value={income} onChange={handleIncomeChange}>
                        <option value="high">High</option>
                        <option value="mid">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    );
}

export default OnChangeEvent;