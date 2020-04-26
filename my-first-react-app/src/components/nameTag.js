import React from 'react';

function nameTag(pr) {
    return(
        // <h3 className="name">{props.name}</h3>
        <h3 className="name">{pr.children}</h3>
    )
}
export default nameTag