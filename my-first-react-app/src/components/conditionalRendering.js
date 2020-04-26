import React from 'react';

function condRender(props) {
    if(!props.firstName && !props.lastName){
        return (
            <div className="name">
                <h2>Invalid Name</h2>
            </div>
        )
    }
    return (
        <div className="name">
            <h3>first name:{props.firstName}</h3>
            <h3>last name:{props.lastName}</h3>
            {props.firstName === "Ganapathi" && <div style={{color:"green"}}>Croods</div>}
            {(props.firstName  === "Ganapathi"|| props.lastName === "Ganapathi") && <div style={{color:"orange"}}>Member of croods family</div>}
        </div>
    )
}
export default condRender;