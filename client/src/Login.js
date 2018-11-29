import React, { Component } from 'react';
import './Login.css';
import App from './App.js'

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password : ""
    };
  }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  updatePwd = (e) => {
    // TO-DO : Check for validity of the string entered
    this.setState({
      password : e.target.value,
    });
  };

  render(){
    return (
      <div className="Login">
        <input className="Login-inputBox" type="text" placeholder="username" onChange={this.updateUsername}/>
      <div>
        <input className="Login-inputBox" type="password" placeholder="password" onChange={this.updatePwd}/>
      </div>
      <div>
        <button className="Login-Submit" onClick={() => this.props.onClick(this.state.username, this.state.password)}> Login </button>
        </div>
     </div>


    );
  }
}

export default Login;
