import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import bankdata from "../../data.js";

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        columns: [
          {
            label: "test ID",
            field: "testID",
            sort: "asc",
            width: 50
          },
          {
            label: "test Entity",
            field: "testEntity",
            sort: "asc",
            width: 50
          },
          {
            label: "test Entity Key",
            field: "testEntityKey",
            sort: "asc",
            width: 50
          },
          {
            label: "test test Date",
            field: "testtestDate",
            sort: "asc",
            width: 100
          },
          {
            label: "test created Date",
            field: "testcreatedDate",
            sort: "asc",
            width: 100
          },
          {
            label: "testScore",
            field: "test Score",
            sort: "asc",
            width: 50
          },
          {
            label: "test Score Normalised",
            field: "testScoreNormalised",
            sort: "asc",
            width: 50
          },
          ,
          {
            label: "testUnitIdentifier",
            field: "test Unit Identifier",
            sort: "asc",
            width: 50
          },
          {
            label: "testOwnerIdentifier",
            field: "testOwner Identifier",
            sort: "asc",
            width: 50
          },
          {
            label: "testState",
            field: "test State",
            sort: "asc",
            width: 50
          },
          {
            label: "edit",
            field: "Edit",
            sort: "asc",
            width: 50
          }
        ],
        rows: []
      }
    };
    // this.createItem = this.createItem.bind(this);
    // this.handlelist = this.handlelist.bind(this);
  }

  componentDidMount() {
    var list = bankdata.map(this.createItem);
  }

  createItem(item) {
    return {
      testID: item.rows.testID,
      testEntity: item.rows.testEntity,
      testEntityKey: item.rows.testEntityKey,
      testtestDate: item.rows.testtestDate,
      testcreatedDate: item.rows.testcreatedDate,
      testScore: item.rows.testScore,
      testScoreNormalised: item.rows.testScoreNormalised,
      testUnitIdentifier: item.rows.testUnitIdentifier,
      testOwnerIdentifier: item.rows.testOwnerIdentifier,
      testState: item.rows.testState,
      itemNew: `<button>ok</button>`
    };
  }

  render() {
    return (
      <MDBDataTable btn striped bordered hover data={this.state.data}>
        test
      </MDBDataTable>
    );
  }
}

export default TablePage;
