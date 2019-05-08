import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardText
} from "mdbreact";

class AdminCardSection1 extends Component {
  constructor() {
    super();
    this.state = {
      width: "50%",
      temp: 23
    };
  }
  render() {
    return (
      <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="fas fa-cubes" className="primary-color" />
              <div className="data">
                <p>Test Cycles</p>
                <h4>
                  <strong>cycles : 2000</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: this.state.width }}
                />
              </div>
              <MDBCardText>
                Better than last week ({this.state.width})
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-line" className="warning-color" />
              <div className="data">
                <p>Thumber Count</p>
                <h4>
                  <strong>200</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  className="progress-bar bg grey"
                  role="progressbar"
                  style={{ width: "25%" }}
                />
              </div>
              <MDBCardText>Worse than last week (25%)</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1" />
              <div className="data">
                <p>TRAFFIC</p>
                <h4>
                  <strong>20000</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  className="progress-bar grey darken-2"
                  role="progressbar"
                  style={{ width: "75%" }}
                />
              </div>
              <MDBCardText>Worse than last week (75%)</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon
                icon="fas fa-thermometer-three-quarters"
                className="red accent-2"
              />
              <div className="data">
                <p>PVLab Temperature</p>
                <h4>
                  <strong>
                    {this.state.temp}°C/ {this.state.temp * 1.8 + 32}°F
                  </strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "25%" }}
                />
              </div>
              <MDBCardText />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default AdminCardSection1;
