import React, { Component } from "react";

// from https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBFormInline, MDBInput
  } from "mdbreact";

class Navigation extends Component {
    render() {
        return (
            <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">New York Times movie reviews</strong>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                    <MDBFormInline>
                        <MDBInput hint="Search" type="search" getValue={this.props.onSearch} />
                    </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

  export default Navigation;