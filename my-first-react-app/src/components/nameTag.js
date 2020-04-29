import React from 'react';

function nameTag(props) {
    return(
        <div className="name">
            <h3>First Name:{props.firstName}</h3>
            <h3>Last Name:{props.lastName}</h3>
        </div>
        // <h3 className="name">{props.name}</h3>
        // <h3 className="name">{props.children}</h3>
    )
}
export default nameTag