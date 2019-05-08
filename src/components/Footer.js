import React from "react";
//import { MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import { MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="text-center font-small darken-2">
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="http://www.google.com"> Testlab </a>{" "}
      </p>
    </MDBFooter>
  );
};

export default Footer;
