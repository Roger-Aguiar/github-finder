import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = (props) =>  
{       
    const {login, avatar_url} = props.user;
    
    return (
        <div className = 'card text-center'>
            <img src = {avatar_url} className = 'round-img' alt = ''></img>
            <h2>{login}</h2>
            <h3>
                <Link to = {`/user/${login}`} className = 'btn btn-dark btn-sm my-1'>Visit Profile</Link>
            </h3>                                                  
        </div>
    )   
}

export default UserItem
