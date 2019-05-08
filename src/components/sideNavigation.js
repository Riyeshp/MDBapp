import React from "react";
import logo from "../assets/logo_.svg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";
import "../styleFiles/sideBar.css";

const sideNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/" activeClassName="activeClass">
          <MDBListGroupItem className="bgc">
            <MDBIcon icon="chart-pie" className="mr-3" />
            Testing Dashboard
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/profile" activeClassName="activeClass">
          <MDBListGroupItem className="bgc">
            <MDBIcon icon="user" className="mr-3" />
            Projects
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/tables" activeClassName="activeClass">
          <MDBListGroupItem className="bgc">
            <MDBIcon icon="table" className="mr-3" />
            Tables
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/inventory" activeClassName="activeClass">
          <MDBListGroupItem className="bgc">
            <MDBIcon icon="fas fa-truck-loading" className="mr-3" />
            Inventory
          </MDBListGroupItem>
        </NavLink>

        <NavLink to="/404" activeClassName="activeClass" />
      </MDBListGroup>
    </div>
  );
};

export default sideNavigation;
