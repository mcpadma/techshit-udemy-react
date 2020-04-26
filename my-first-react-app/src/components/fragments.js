import React,{Fragment} from 'react';

function fragment(props){
    return (
        <div className="name">
            <h3>first name:{props.firstName}</h3>
            <h3>last name:{props.lastName}</h3>
        </div>
    )
    return (
        [
            <h3 className="name">first name:{props.firstName}</h3>,
            <h3 className="name">last name:{props.lastName}</h3>
        ]
    )
    return (
        <>
            <h3 className="name">first name:{props.firstName}</h3>
            <h3 className="name">last name:{props.lastName}</h3>
        </>
    )
    return (
        <Fragment>
            <h3 className="name">first name:{props.firstName}</h3>
            <h3 className="name">last name:{props.lastName}</h3>
        </Fragment>
    )
}

export default fragment;
