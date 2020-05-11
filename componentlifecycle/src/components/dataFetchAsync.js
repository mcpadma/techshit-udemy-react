import React, {useState, useEffect} from 'react';

const initProfile = {
    followers:null,
    pulicRepos:null
};
function FetchDataAsync() {
    const [profile,setProfile] = useState(initProfile);

    async function getProfile() {
        const res = await fetch('https://api.github.com/users/mcpadma');
        const json = await res.json();

        setProfile({
            followers:json.followers,
            pulicRepos:json.public_repos
        })
    }

    useEffect(()=> {
        getProfile();
    },[]);

    return(
        <div>
            <h2>Fetch data with async wait</h2>
            <h3>{`followers:${profile.followers},public Repos: ${profile.pulicRepos}`}</h3>
        </div>
    )
}

export default FetchDataAsync;