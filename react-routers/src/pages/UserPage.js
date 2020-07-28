import React from 'react';

function UserPage(Props) {

    return(
        <h1>Welcome {Props.match.params.firstname} {Props.match.params.lastname}</h1>
    )
}

export default UserPage;