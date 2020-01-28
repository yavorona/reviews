import React from "react";
import ReviewsControls from "./ReviewsControls.jsx";
import Reviews from "./Reviews.jsx";
import { set } from "mongoose";
const axios = require("axios");

class ReviewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelReviewsData: {}
    };
  }

  componentDidMount() {
    axios
      .get("/reviews/hotels" + location.pathname)
      .then(response => {
        // handle success
        this.setState({
          hotelReviewsData: response.data
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        Reviews
        <ReviewsControls />
        <Reviews hotelReviewsData={this.state.hotelReviewsData} />
      </div>
    );
  }
}

export default ReviewsView;
