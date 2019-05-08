import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideNavigation from "./components/sideNavigation";
import Footer from "./components/Footer";
import "./styleFiles/index.css";
import DashboardPage from "./components/pages/DashboardPage";
import ProfilePage from "./components/pages/ProfilePage";
import TablesPage from "./components/pages/TablesPage";

import InventoryPage from "./components/pages/InventoryPage";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLogged: false
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/workinven/all", {
      method: "get"
    })
      .then(function(res) {
        console.log(res);
        return res.json();
      })
      .then(list => {
        this.setState(prevState => {
          return {
            data: list
          };
        });
      });
  }

  render() {
    const list = this.state.data || [];
    console.log(list);
    return (
      <BrowserRouter>
        <div className="flexible-content">
          <SideNavigation />
          <main id="content" className="p-5">
            <Switch>
              <Route path={"/"} exact component={DashboardPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/tables" component={TablesPage} />
              <Route
                path="/inventory"
                render={() => <InventoryPage lists={list} />}
              />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
