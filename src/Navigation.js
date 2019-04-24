import React, { Component } from "react";

// from https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBFormInline } from "mdbreact";

class Navigation extends Component {
    render() {
        return (
            <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarBrand>
                    <img src="/logo.svg" alt=""/>
                    <strong className="white-text">New York Times movie reviews</strong>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                    <MDBFormInline>
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onInput={this.props.onSearch} />
                        </div>
                    </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

  export default Navigation;