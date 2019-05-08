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
class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: "testphase",
      item: props.entries,
      alertID: "",
      alertEntity: "",
      alertEntityKey: "",
      alertBussinessDate: "",
      alertcreatedDate: "",
      alertScore: "",
      alertScoreNormalised: "",
      bussinessUnitIdentifier: "",
      ownerIdentifier: "",
      currentState: ""
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
        <a style={divstyle} onClick={this.toggle} href="http://www.google.com">
          {this.props.entries.alertID}
        </a>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            Ticket no: {this.props.entries.alertID} Details
          </MDBModalHeader>
          <MDBModalBody>
            <div className="form-group">
              <label>AlertID</label>
              <input
                type="email"
                className="form-control"
                defaultValue={this.props.entries.alertID}
                onChange={event =>
                  this.setState({ alertID: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Alert Entity</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertEntity}
                onChange={event =>
                  this.setState({ alertEntity: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Alert Entity Key</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertEntityKey}
                onChange={event =>
                  this.setState({ alertEntity: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Alert Bussiness Date</label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                id="exampleInput"
                className="form-control "
              />
              {/* <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertBussinessDate}
               
                }
              /> */}
              <label htmlFor="exampleInput">Alert created Date</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertcreatedDate}
                onChange={event =>
                  this.setState({ alertcreatedDate: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Alert Score</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertScore}
                onChange={event =>
                  this.setState({ alertScore: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Alert Score Normalised</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertScoreNormalised}
                onChange={event =>
                  this.setState({ alertScoreNormalised: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Bussiness Unit Identifier</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.bussinessUnitIdentifier}
                onChange={event =>
                  this.setState({ bussinessUnitIdentifier: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Owner Identifier</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.ownerIdentifier}
                onChange={event =>
                  this.setState({ ownerIdentifier: event.target.value })
                }
              />
              <label htmlFor="exampleInput">Current State</label>
              <input
                type="email"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.currentState}
                onChange={event =>
                  this.setState({ currentState: event.target.value })
                }
              />
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

export default ModalPage;
