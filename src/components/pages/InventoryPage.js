import React, { Component } from "react";
// import {
//   MDBDataTable
//   MDBBtn,
//   MDBContainer,
//   MDBModal,
//   MDBModalBody,
//   MDBModalHeader,
//   MDBModalFooter
// } from "mdbreact";

import { MDBDataTable } from "mdbreact";
//import inventoryData from "./Inventory";
import ModalInvenEditItems from "./ModalInvenEditItems";
import ModalAdditem from "./ModalInvenAddItems";
import "../../styleFiles/App.css";

class InventoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalInven: false,
      data: {
        columns: [
          {
            label: "Id",
            field: "itemId",
            sort: "asc"
          },
          {
            label: "Description",
            field: "description",
            sort: "asc",
            width: 50
          },
          {
            label: "Category",
            field: "category",
            sort: "asc",
            width: 50
          },
          {
            label: "Sub Category",
            field: "subCategory",
            sort: "asc",
            width: 100
          },
          {
            label: "Type",
            field: "type",
            sort: "asc",
            width: 100
          },
          {
            label: "Specification",
            field: "specification",
            sort: "asc",
            width: 50
          },
          {
            label: "Material",
            field: "material",
            sort: "asc",
            width: 20
          },

          {
            label: "Quantity",
            field: "quantity",
            width: 20
          },
          {
            label: "Purchase Date",
            field: "purchaseDate",
            width: 50
          }
        ],
        rows: [],
        test: []
      }
    };
    this.createItem = this.createItem.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {}

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  createItem(item, index) {
    // console.log(item);
    return {
      itemID: index + 1,
      description: <ModalInvenEditItems entries={item} />,
      category: item.category,
      subCategory: item.subCategory,
      type: item.type,
      specification: item.specification,
      material: item.material,
      quantity: item.quantity,
      purchaseDate: this.formatDate(item.purchaseDate)
    };
  }

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  }
  // testget() {
  //   const databody = {
  //     name: "test23",
  //     email: "test23@gmail.com",
  //     password: "test23"
  //   };
  //   fetch("http://localhost:8000/api/auth/login", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(databody)
  //   });
  // }

  handleChange() {
    const lists = this.state.data.rows || [];
    console.log(lists);
    // var list = lists.map(this.createItem);
    // // if (list.length && list) {
    // //
    // // }
    // const klkl = (list.length && list) || [];
    // this.setState({ data.rows: klkl });

    // if (list) {
    //   console.log(list);
    // }
    //console.log(typeof this.state.test);
  }

  // handleChange1() {
  //   const lists = (this.props && this.props.lists) || [];

  //   var newlist = lists.map(this.createItem);
  //   console.log(lists);
  //   this.setState(prevState => {
  //     return {
  //       data: {
  //         columns: prevState.data.columns,
  //         rows: newlist
  //       }
  //     };
  //   });
  // }

  render() {
    // const list = (this.props && this.props.lists) || [];
    // console.log(list);

    const lists = (this.props && this.props.lists) || [];
    var newlist = lists.map(this.createItem);
    const datafinal = { columns: this.state.data.columns, rows: newlist };

    return (
      <div>
        <ModalAdditem />
        <MDBDataTable
          id="dtBasicExample"
          btn
          striped
          bordered
          hover
          data={datafinal}
        />
        ;<button onClick={this.handleChange1}>testing</button>
      </div>
    );
  }
}

export default InventoryPage;
