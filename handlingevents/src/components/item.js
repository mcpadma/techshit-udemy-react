import React from 'react';
import './item.css';

function item(props) {
return(
    <div className="itemName">
        {/* <h3>Name: {props.name}</h3>
        <h3>Calories: {props.calorie}</h3> */}
        <h3>Name: {props.item.name}</h3>
        <h3>Calories: {props.item.calories}</h3>
    </div>
 )
}

export default item;