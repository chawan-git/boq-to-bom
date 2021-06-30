import React, { Component } from "react";
import { Route } from "react-router-dom";
import history from "../history";
import CreateUserComponent from "./CreateUserComponent";
import FooterComponent from "./FooterComponent";
import ManagementDashboard from "./ManagementDashboard";
import ManagementHeaderComponent from "./ManagementHeaderComponent";
import ViewUserComponent from "./ViewUserComponent";

export class ManagementHomeComponent extends Component {
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }

  getData = () => {
    if (localStorage.getItem("Management")) {
    } else {
      history.push("/unauthorized");
    }
  };
  render() {
    return (
      <>
        <ManagementHeaderComponent />
        <Route path="/management/home" component={ManagementDashboard} />
        <Route path="/management/createuser" component={CreateUserComponent} />
        <Route path="/management/viewuser" component={ViewUserComponent} />
        <FooterComponent />
      </>
    );
  }
}

export default ManagementHomeComponent;
