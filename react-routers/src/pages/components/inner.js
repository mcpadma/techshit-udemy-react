import React, {useContext} from 'react';
import messageContext from './../../contexts/messageContext';


function Inner() {
    const [message, setMessage] = useContext(messageContext);
    return(
        <div>
            <h4>Inner : {message}</h4>
            <button onClick={()=>{setMessage(Math.random().toString())}}>Change Message</button>
        </div>
    )
}

export default Inner;