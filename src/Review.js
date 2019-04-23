import React, { Component } from "react";

// from https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


import './App.css';

class Review extends Component {
  render() {
    return (
        <MDBCol md="4" key={this.props.date_updated} style={{marginBottom: '1rem'}}>
            <MDBCard>
                <MDBCardImage className="img-fluid" style={{width: '100%'}} src={this.props.multimedia.src} waves />
                <MDBCardBody>
                    <MDBCardTitle style={{fontSize: '1.2rem'}}>{this.props.headline}</MDBCardTitle>
                    <MDBCardText>{this.props.summary_short}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
  }
}

export default Review;
