import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component 
{ 
  state = 
  {
    users: [],
    loading: false
  }

  async componentDidMount()
  {
    this.setState({loading: true});
    const res = axios.get('https://api.github.com/users');
    this.setState({ users: (await res).data, loading: false});

    //console.log((await res).data);
  }

  render()
  {  

    return (
      <div className="App">        
        <Navbar></Navbar>  
            
        <div className = "container">
          <Users loading = {this.state.loading} users = {this.state.users}></Users>
        </div>
       
      </div>
    );
  }  
}

export default App;
