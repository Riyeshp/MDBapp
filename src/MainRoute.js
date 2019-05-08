import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import MainPage from "./Mainpage";
import DashboardPage from "./components/pages/DashboardPage";
import ProfilePage from "./components/pages/ProfilePage";
import TablesPage from "./components/pages/TablesPage";
import MapsPage from "./components/pages/MapsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import InventoryPage from "./components/pages/InventoryPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    );
  }
}

export default Routes;
