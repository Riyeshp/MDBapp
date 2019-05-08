import React, { Component } from "react";
import {
  MDBDataTable
  // MDBBtn,
  // MDBContainer,
  // MDBModal,
  // MDBModalBody,
  // MDBModalHeader,
  // MDBModalFooter
} from "mdbreact";
import bankdata from "../../data.js";
import Modal from "./ModalPage";

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: {
        columns: [
          {
            label: "Alert ID",
            field: "alertID",
            sort: "asc",
            width: 50
          },
          {
            label: "Alert Entity",
            field: "alertEntity",
            sort: "asc",
            width: 50
          },
          {
            label: "Alert Entity Key",
            field: "alertEntityKey",
            sort: "asc",
            width: 50
          },
          {
            label: "Alert Bussiness Date",
            field: "alertBussinessDate",
            sort: "asc",
            width: 100
          },
          {
            label: "Alert created Date",
            field: "alertcreatedDate",
            sort: "asc",
            width: 100
          },
          {
            label: "Alert Score",
            field: "alertScore",
            sort: "asc",
            width: 50
          },
          {
            label: "Alert Score Normalised",
            field: "alertScoreNormalised",
            sort: "asc",
            width: 50
          },

          {
            label: "Bussiness Unit Identifier",
            field: "bussinessUnitIdentifier",
            sort: "asc",
            width: 20
          },
          {
            label: "Owner Identifier",
            field: "ownerIdentifier",
            sort: "asc",
            width: 50
          },
          {
            label: "Current State",
            field: "currentState",
            sort: "asc",
            width: 50
          },
          {
            label: "Edit",
            field: "Edit",
            sort: "asc",
            width: 50
          }
        ],
        rows: []
      }
    };
    this.createItem = this.createItem.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    var list = bankdata.map(this.createItem);

    this.setState(prevState => {
      return {
        data: {
          columns: prevState.data.columns,
          rows: list
        }
      };
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  createItem(item) {
    return {
      alertID: item.alertID,
      alertEntity: item.alertEntity,
      alertEntityKey: item.alertEntityKey,
      alertBussinessDate: item.alertBussinessDate,
      alertcreatedDate: item.alertcreatedDate,
      alertScore: item.alertScore,
      alertScoreNormalised: item.alertScoreNormalised,
      bussinessUnitIdentifier: item.bussinessUnitIdentifier,
      ownerIdentifier: item.ownerIdentifier,
      currentState: item.currentState,
      itemNew: <Modal entries={item} />
    };
  }

  render() {
    // var list = this.state.data.rows.map(this.createItem);

    return <MDBDataTable btn striped bordered hover data={this.state.data} />;
  }
}

export default TablePage;
