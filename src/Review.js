import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import './App.css';

class Review extends Component {
  render() {
    return (
        <MDBCol md="4" style={{marginBottom: '1rem'}}>
            <MDBCard>
                {this.props.multimedia && this.props.multimedia.src && (
                  <MDBCardImage className="img-fluid" style={{width: '100%'}} src={this.props.multimedia.src} />
                )}
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
