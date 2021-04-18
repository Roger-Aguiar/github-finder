import React from 'react'

const UserItem = (props) =>  
{       
    const {login, avatar_url, html_url} = props.user;
    
    return (
        <div className = 'card text-center'>
            <img src = {avatar_url} className = 'round-img' alt = ''></img>
            <h2>{login}</h2>
            <h3>
                <a href = {html_url} className = 'btn btn-dark btn-sm my-1'>Visit Profile</a>
            </h3>                                                  
        </div>
    )   
}

export default UserItem
