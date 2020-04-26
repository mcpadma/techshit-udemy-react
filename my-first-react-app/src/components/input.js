import React from 'react';

function Input(props) {
    return (
        <input placeholder={props.placeholder} type={props.type}/>
    )
}
// function Input({placeholder, type}) {
//     return (
//         <input placeholder={placeholder} type={type}/>
//     )
// }

export default Input;