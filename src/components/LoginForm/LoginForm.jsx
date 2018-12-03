import React, { Component } from "react";
import fire from "../../firebase";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    login: "",
    isLoggedIn: ""
  };

  HandlerClick = () => {
    const auth = fire.auth();
    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    promise.catch(e => console.log("signin-", e.message));
  };

  SignUpClick = () => {
    const auth = fire.auth();
    const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
    promise.catch(e => console.log("signup-", e.message));

    fire.auth().onAuthStateChanged(fireUser => {
      if (fireUser) {
        console.log("statechange-", fireUser);
        this.setState({ isLoggedIn: fireUser });
      } else {
        //console.log("not logged in");
        this.setState({ isLoggedIn: "" });
      }
    });
  };

  SignOutClick = () => {
    fire.auth().signOut();
    this.setState({ isLoggedIn: "" });
  };

  onValueChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ width: "800px", margin: "0 auto", backgroundColor: "white" }}>
        <input id="txtEmail" name="email" type="email" placeholder="Email" onChange={this.onValueChanged} />
        <input id="txtPassword" name="password" type="password" placeholder="Password" onChange={this.onValueChanged} />
        <button id="btnLogin" className="btn btn-action" onClick={this.HandlerClick}>
          Login
        </button>
        {this.state.isLoggedIn ? (
          <button id="btnLogout" className="btn btn-action" onClick={this.SignOutClick}>
            Log out
          </button>
        ) : (
          <button id="btnSignUp" className="btn btn-secondary" onClick={this.SignUpClick}>
            Sign Up
          </button>
        )}
      </div>
    );
  }
}

export default LoginForm;
