import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdbreact";

import data from "../../data.js";
class TablesPage extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      users: ""
    };
  }

  // componentDidMount() {
  //   fetch("http://ec2-13-58-71-155.us-east-2.compute.amazonaws.com:9000/users")
  //     .then(results => results.json())
  //     .then(data =>
  //       this.setState(prevstate => {
  //         return {
  //           users: prevstate.users.concat(data)
  //         };
  //       })
  //     );
  // }

  render() {
    let list = this.state.data.map(item => {
      return (
        <MDBTableBody>
          <tr>
            <td>{item.alertID}</td>
            <td>{item.alertEntity}</td>
            <td>{item.alertEntityKey}</td>
            <td>{item.alertBussinessDate}</td>
            <td>{item.alertcreatedDate}</td>
            <td>{item.alertScore}</td>
            <td>{item.alertScoreNormalised}</td>
            <td>{item.bussinessUnitIdentifier}</td>
            <td>{item.ownerIdentifier}</td>
            <td>{item.currentState}</td>
          </tr>
        </MDBTableBody>
      );
    });

    console.log(this.state.data[0]);
    return (
      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">Basic tables</h4>
            </MDBView>
            <MDBCardBody>
              <MDBTable table-responsive striped>
                <MDBTableHead>
                  <tr>
                    <th>#</th>
                    <th>alertID</th>
                    <th>alertEntity</th>
                    <th>alertEntityKey</th>
                    <th>alertBussinessDate</th>
                    <th>alertcreatedDate</th>
                    <th>alertScore</th>
                    <th>alertScoreNormalised</th>
                    <th>bussinessUnitIdentifier</th>
                    <th>ownerIdentifier</th>
                    <th>currentState</th>
                  </tr>
                </MDBTableHead>
                {list}
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default TablesPage;
