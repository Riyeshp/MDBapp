import React, { Component } from "react";
import logo from "../../assets/justLogo.svg";

import "../../styleFiles/loginCss.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  // submit() {
  //   // let databody = {
  //   //   username: "rpserver450@gmail.com",
  //   //   password: "rpserver450"
  //   // };

  //   fetch(
  //     "http://ec2-13-58-71-155.us-east-2.compute.amazonaws.com:9000/api/auth/login",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" }, // this line is important, if this content-type is not set it wont work
  //       body: queryString.stringify({
  //         username: "rpserver450@gmail.com",
  //         password: "rpserver450"
  //       })
  //     }
  //   );
  // }

  // register user

  onSubmit = event => {
    let reqBody = {
      name: "test000012",
      email: "rpserver000012@gmail.com",
      password: "rpserver000012"
    };
    event.preventDefault();
    fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong with your fetch");
        }
      })
      .then(json => {
        console.log("test");
        localStorage.setItem("jwtToken", json.token);
      });
  };

  //verify user

  // onVerify = event => {
  //   let databody = localStorage.getItem("jwtToken");
  //   event.preventDefault();
  //   console.log(databody);
  //   fetch("http://localhost:8000/api/auth/me", {
  //     method: "get",
  //     headers: {
  //       "x-access-token": databody
  //     }
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw new Error("Something went wrong with your fetch");
  //       }
  //     })
  //     .then(json => {
  //       console.log(json.token);
  //     })
  //     .catch(error => {
  //       //handle the error in here may be
  //       console.log(error);
  //     });
  // };

  onVerify = event => {
    let databody = localStorage.getItem("jwtToken");
    event.preventDefault();
    console.log(databody);
    fetch("http://localhost:8000/api/auth/me", {
      method: "get",
      headers: {
        "x-access-token": databody
      }
    })
      .then(res => {
        console.log(res.json());
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong with your fetch");
        }
      })
      .catch(error => {
        //handle the error in here may be
        console.log(error);
      });
  };

  onLogin = event => {
    let reqBody = {
      email: "rpserver4501234@gmail.com",
      password: "rpserver4501234"
    };
    // event.preventDefault();
    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong with your fetch");
        }
      })
      .then(json => {
        localStorage.setItem("jwtToken", json.token);
        console.log(this.props.test);
      });
  };

  render() {
    const {
      test,
      match: { params }
    } = this.props;
    console.log(test);
    return (
      <div className="bodybg">
        <div className="login-form">
          <div className="form-header">
            <div className="user-logo">
              <img alt="MDB React Logo" className="img-fluid" src={logo} />
            </div>
            <div className="title">Login</div>
          </div>
          <div className="form-container">
            <div className="form-element">
              <label className="fa fa-user" />
              <input type="text" id="login-username" placeholder="Username" />
            </div>
            <div className="form-element">
              <label className="fa fa-key" />
              <input type="text" id="login-password" placeholder="Password" />
            </div>
            <div className="form-element">
              <button onClick={this.onVerify}>verify</button>
            </div>

            <div className="form-element forgot-link">
              <a href="http://www.google.com">Forgot password?</a>
            </div>
            <div className="form-element">
              <button onClick={this.onLogin}>login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
