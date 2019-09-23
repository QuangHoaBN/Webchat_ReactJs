import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './views/main/Homepage';
import Authen from './views/author/author';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// function App() {
// return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

// <Homepage />
// <Authen />
// );
// }


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      userName: ''
    }
    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  Login(userName, password) {
    if (userName == 'MrHoan' && password == '123') {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      //remove item
      // let data = localStorage.getItem("data")
      // localStorage.removeItem("")
      // localStorage.clear
      this.setState({
        userName: userName,
        isAuthenticated: true
      })
    }
  }

  Logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");

    localStorage.setItem("isAuthenticated", false);

    this.setState({
      userName: '',
      isAuthenticated: false
    })
  }

  render() {
    return (
      <Router>
        <Route path="/" render={() => (this.state.isAuthenticated ? <Redirect to="/" /> : <Redirect to="/login" />)} />
        <Route path="/login" render={() => <Authen onClickLogin={this.Login} />} />
        <Route exact path="/" render={() => <Homepage onClickLogout={this.Logout} />} />
      </Router>
      // <Homepage />
    );
  }
}

export default App;