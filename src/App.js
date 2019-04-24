import React, { Component } from "react";

// from https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow } from "mdbreact";

import AwesomeDebouncePromise from 'awesome-debounce-promise';

import Navigation from "./Navigation";
import Review from "./Review";

import './App.css';

const searchAPI = AwesomeDebouncePromise(query => fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=JZxu5NO5PvmA3JtKfcAbNs67KQJOX1Xn&query=' + encodeURIComponent(query)), 500);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_query: '',
      status: 'loading',
      reviews: []
    };

    this.search(this.state.search_query);
  }

  handleResults = (json) => {
    if (!json.results || json.results.length === 0) throw new Error('No results');
    this.setState({
      reviews: json.results,
      status: 'success'
    });
  };

  handleError = () => {
    this.setState({
      status: 'error'
    });
  };

  search = (value)=> {
    searchAPI(value)
    .then((response) => response.json())
    .then(this.handleResults)
    .catch(this.handleError);
  };

  handleInput = value => {
    value = value.trim();

    this.setState({
      search_query: value,
      status: 'loading',
      reviews: []
    });

    this.search(value)
  };

  render() {
    return (
        <React.Fragment>
          <MDBContainer>
            <Navigation onSearch={this.handleInput} />
            <h2>
              Movie reviews
              {this.state.search_query && (
                <React.Fragment>
                  &nbsp;for &quot;<strong>{this.state.search_query}</strong>&quot;
                </React.Fragment>
              )}
            </h2>

            {this.state.status === 'loading' &&
              (<MDBRow center>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </MDBRow>)
            }

            {this.state.status === 'success' &&  
              (<MDBRow between>
                {this.state.reviews.map(review => (
                  <Review {...review} key={review.link.url} />
                ))}
              </MDBRow>)
            }

            {this.state.status === 'error' &&  
              (<blockquote className="blockquote bq-primary">
                <p className="bq-title">No reviews found</p>
                <p>The search for &quot;<strong>{this.state.search_query}</strong>&quot; returned no results. Please try to rephrase your search query.</p>
              </blockquote>)
            }
          </MDBContainer>
        </React.Fragment>
    );
  }
}

export default App;
