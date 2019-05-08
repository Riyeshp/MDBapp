import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import ProfilePage from "./components/pages/ProfilePage";
import TablesPage from "./components/pages/TablesPage";
import MapsPage from "./components/pages/MapsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import InventoryPage from "./components/pages/InventoryPage";
import LoginPage from "./components/pages/LoginPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="Main/Dashboard" exact component={DashboardPage} />
        <Route path="Main/profile" component={ProfilePage} />
        <Route path="/tables" component={TablesPage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/404" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
