import React from 'react';

function UseRefs() {
    return(
        <div>
            <h3>Use Refs Hook</h3>
            <div>
                <span>Name:</span>
                <input value={name} type="text" onChange={handleNameChange}></input>
            </div>
        </div>
    );
}

export default UseRefs;