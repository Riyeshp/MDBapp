import React, { Component } from "react";

//import TopNavigation from './components/topNavigation';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Mainpage";
import LoginPage from "./components/pages/LoginPage";
//import ProtectedRoute from "./protected.route";
import "./styleFiles/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
    this.Authentication = this.Authentication.bind(this);
  }

  Authentication(e) {
    this.setState({ isAuthenticated: e });
  }

  render() {
    if (this.state.isAuthenticated === false) {
      return (
        <BrowserRouter>
          <div className="flexible-content ">
            <Route
              path="/login"
              render={props => (
                <LoginPage test={this.Authentication} {...props} />
              )}
            />
            <Route component={LoginPage} />
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <div className="flexible-content ">
          <Switch>
            <Route
              path="/"
              exact
              isAuthenticated={this.state.isAuthenticated}
              component={MainPage}
            />
            <Route component={MainPage} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
