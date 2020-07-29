import React, {useContext} from 'react';
import messageContext from './../../contexts/messageContext';
import Inner from './inner';

function Outer() {
    return(
        <div>
            <h3>Outer : {useContext(messageContext)[0]}</h3>
            <Inner></Inner>
            {/* <h2>Message: {useContext(messageContext)}</h2> */}
        </div>
    )
}

export default Outer;