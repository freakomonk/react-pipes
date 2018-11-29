import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Title from './Title.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Project from './Project.js';
import Logout from './Login.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      isLoggedIn: false,
    };
  }


  componentDidMount() {
    this.callLogin()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callLogin = async () => {
    const response = await fetch('/app/login');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  successfulLogin = async (username, password) => {
    const response = await fetch('http://localhost:5000/app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
    });
    const body = await response.text();
    if(body === 'OK'){
    this.setState({
      isLoggedIn: true,
    });
  }
    return true;
  };


  render() {
    console.log(JSON.stringify(this.state.isLoggedIn));
    return (
      <Router>
      <div className="App">
      <div style={{height: '20px'}} />
      <Title />

      <Route path='/' render={(props) => (this.state.isLoggedIn) ? <Project/> : <Login onClick={this.successfulLogin} />} />
      <Route path="/createProject" component={Project} />
      <Route path="/logout" component={Logout} />

      </div>
      </Router>
    );
  }
}

export default App;
