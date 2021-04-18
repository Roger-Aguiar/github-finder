import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component 
{    
    render() 
    {
        return (
            <div className = 'userStyle'>
                {this.props.users.map(user => (<UserItem key = {user.id} user = {user}></UserItem>))}
            </div>
        )
    }
}

export default Users
