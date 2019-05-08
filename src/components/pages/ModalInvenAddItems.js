import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import "react-datepicker/dist/react-datepicker.css";
import "../../styleFiles/App.css";
class ModalInvenAddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: "testphase",
      pic: "",

      description: "",
      category: "",
      subCategory: "",
      type: "",
      specification: "",
      material: "",
      quantity: 0,
      purchaseDate: "",
      tools: [
        {
          name: "Select the category",
          list: []
        },

        {
          name: "machine",
          lists: [
            "Lathe",
            "Milling m/c",
            "drillingm/c",
            "hand grinder",
            "hand drill",
            "pedestal grinder",
            "belt sander",
            "hand chainsaw	",
            "Angle Grinder"
          ]
        },
        {
          name: "Hand-tools",
          lists: [
            "spanners",
            "screw drivers",
            "hammers",
            "allenkeys",
            "punch",
            "hacksaw",
            "files",
            "pliers",
            "center punches",
            "scribes"
          ]
        },
        {
          name: "cutting-tools",
          lists: [
            "Auger Bits",
            "Taper shank Twist drill",
            "straight shank Twist drill",
            "Countersink Drills",
            "mill cutters",
            "lathe tools",
            "taps",
            "threadcutting tools",
            "oil stones",
            "emery papers"
          ]
        },
        {
          name: "Measurment-Instruments",
          lists: [
            "vernier-calipers",
            "ruler",
            "compass",
            "x-callipers",
            "spirit level",
            "tape"
          ]
        },
        {
          name: "cleaning-tools",
          lists: ["brushes", "Dustbins", "Vacuum Cleaner", "Rugs", "Dustpans "]
        },
        {
          name: "fastners",
          lists: [
            "screws",
            "wood screws",
            "machine screws",
            "thread cutting m/c screws",
            "nuts",
            "Hex",
            "heavy hex",
            "flange",
            "washers",
            "flat",
            "fender",
            "external tooth lock",
            "split lock",
            "internal Tooth lock",
            "bolts",
            "revet"
          ]
        },
        {
          name: "fluids",
          lists: ["cutting oil", "lubrication", "glues"]
        },
        {
          name: "Clamping-tools",
          lists: [
            "F-clamps",
            "bar-clamps",
            "c-clamps",
            "vices",
            "t-bolts",
            "step blocks",
            "parallel blocks"
          ]
        },
        {
          name: "safety-equipments",
          lists: ["goggles", "ear muffs"]
        }
      ],
      selectedCategory: "select the category",
      materialList: [
        "N/A",
        "Mild-steel",
        "HCS",
        "HSS",
        "Cemented-carbides",
        "Cermets",
        "Diamond",
        "CBN",
        "UCON",
        "Sialon"
      ]
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.testpost = this.testpost.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange(e) {
    this.setState({ selectedCategory: e.target.value });
  }

  testpost() {
    let databody = {
      description: this.state.description,
      category: this.state.selectedCategory,
      subCategory: this.state.subCategory,
      type: this.state.type,
      specification: this.state.specification,
      material: this.state.material,
      quantity: this.state.quantity,
      purchaseDate: this.state.purchaseDate
    };
    fetch("http://localhost:8000/api/workinven/test", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(databody)
    });

    this.setState({ modal: false });
  }

  getall() {
    fetch();
  }

  render() {
    let divstyle = {
      color: "blue",
      fontStyle: "italic",
      fontWeight: "semi-bold"
    };

    let toolgroup = this.state.tools.filter(tool => {
      return tool.name === this.state.selectedCategory;
    });

    // validate lists and set it to empty array, if toolgroup is empty
    const lists = (toolgroup && toolgroup.length && toolgroup[0].lists) || [];

    // create select option values
    const items = this.state.tools.map((toolCategory, i) => (
      <option key={i}>{toolCategory.name}</option>
    ));

    // create second select option items
    const toolgroupItems = lists.map((list, i) => (
      <option key={i}>{list}</option>
    ));

    const materialList = this.state.materialList.map((list, i) => (
      <option key={i}>{list}</option>
    ));
    return (
      <MDBContainer>
        <div
          style={divstyle}
          className="btnadditem"
          title="Add new items"
          onClick={this.toggle}
        >
          <i className="fas fa-plus" />
        </div>
        <MDBModal
          id="modalAdditems"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <MDBModalHeader toggle={this.toggle}>
            Add new Inventory Item
          </MDBModalHeader>
          <MDBModalBody className="modalFlex">
            <div className="form-group">
              <label>Description</label>
              <input
                type="email"
                className="form-control invModal"
                onChange={e => {
                  this.setState({ description: e.target.value });
                }}
              />
              <label>Category</label>
              <div>
                <select
                  className="browser-default custom-select"
                  onChange={this.handleChange}
                  value={this.state.selectedCategory}
                >
                  {items}
                </select>
              </div>
              <label>Sub-Category</label>
              <div>
                <select
                  className="browser-default custom-select"
                  onChange={e => {
                    this.setState({ subCategory: e.target.value });
                  }}
                >
                  {toolgroupItems}
                </select>
              </div>
              <label htmlFor="exampleInput">Type</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control invModal"
                onChange={e => {
                  this.setState({ type: e.target.value });
                }}
              />
              <label htmlFor="exampleInput">specification</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control invModal"
                onChange={e => {
                  this.setState({ specification: e.target.value });
                }}
              />
              <label htmlFor="exampleInput">Material</label>
              <div>
                <select
                  className="browser-default custom-select"
                  onChange={e => {
                    this.setState({ material: e.target.value });
                  }}
                >
                  {materialList}
                </select>
              </div>

              <label htmlFor="exampleInput">Quantity</label>
              <input
                type="number"
                id="exampleInput"
                className="form-control invModal"
                onChange={e => {
                  this.setState({ quantity: e.target.value });
                }}
              />
              <label htmlFor="exampleInput">Purchase Date</label>
              <input
                type="Date"
                id="exampleInput"
                className="form-control invModal"
                onChange={e => {
                  this.setState({ purchaseDate: e.target.value });
                }}
              />
              <img />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.testpost}>
              Add Items
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalInvenAddItems;

// <select>
//   {toolgroup[0].lists.map(list => {
//     return <option>{list}</option>;
//   })}
// </select>

// <input
//   type="email"
//   id="exampleInput"
//   className="form-control invModal"
// />

// componentDidMount() {
//   var newlist = this.state.views.map(this.createSelect);
//   this.setState({ list: newlist });
// }
