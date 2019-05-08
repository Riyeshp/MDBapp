import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../styleFiles/App.css";
class ModalPageInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: "testphase",
      item: props.entries,
      description: "",
      category: "",
      subCategory: "",
      type: "",
      specification: "",
      material: "",
      quantity: 0,
      purchaseDate: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  postdata() {}

  render() {
    console.log(this.state.item);
    let divstyle = {
      color: "blue",
      fontStyle: "italic",
      fontWeight: "semi-bold"
    };
    return (
      <MDBContainer>
        <a style={divstyle} onClick={this.toggle}>
          {this.props.entries.Description}
        </a>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            Inventory: {this.props.entries.Description} Details
          </MDBModalHeader>
          <MDBModalBody>
            <div className="invmodal-group ">
              <div className="form-group">
                <label>Description</label>
                <input
                  type="email"
                  className="form-control invModal"
                  defaultValue={this.props.entries.Description}
                  onChange={event =>
                    this.setState({ description: event.target.value })
                  }
                />
                <label htmlFor="exampleInput">Category</label>
                <input
                  type="email"
                  id="exampleInput"
                  className="form-control invModal"
                  defaultValue={this.props.entries.Category}
                  onChange={event =>
                    this.setState({ category: event.target.value })
                  }
                />
                <label htmlFor="exampleInput">Sub Category</label>
                <input
                  type="email"
                  id="exampleInput"
                  className="form-control invModal"
                  defaultValue={this.props.entries.SubCategory}
                  onChange={event =>
                    this.setState({ subCategory: event.target.value })
                  }
                />
                <label htmlFor="exampleInput">Type</label>
                {/* <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                id="exampleInput"
                className="form-control invModal "
              /> */}
                <input
                  type="email"
                  id="exampleInput"
                  className="form-control invModal"
                  defaultValue={this.props.entries.Type}
                  onChange={event =>
                    this.setState({ type: event.target.value })
                  }
                />
                <label htmlFor="exampleInput">Material</label>
                <input
                  type="email"
                  id="exampleInput"
                  className="form-control invModal"
                  defaultValue={this.props.entries.Material}
                  onChange={event =>
                    this.setState({ material: event.target.value })
                  }
                />
                <label htmlFor="exampleInput">Quantity</label>
                <input
                  type="email"
                  id="exampleInput"
                  className="form-control invModal"
                  defaultValue={this.props.entries.Quantity}
                  onChange={event =>
                    this.setState({ quantity: event.target.value })
                  }
                />
                <label htmlFor="exampleInput">Purchase Date</label>
                <input
                  type="email"
                  id="exampleInput"
                  className="form-control invModal"
                  defaultValue={this.props.entries.PurchaseDate}
                  onChange={event =>
                    this.setState({ purchaseDate: event.target.value })
                  }
                />
              </div>
              <div className="invPic">
                <img src="{}" />
              </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.postdata}>
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPageInventory;
