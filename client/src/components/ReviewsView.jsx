import React from "react";
import ReviewsControls from "./ReviewsControls.jsx";
import Reviews from "./Reviews.jsx";
import { set } from "mongoose";
const axios = require("axios");

class ReviewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelReviewsData: []
    };
  }

  componentDidMount() {
    axios
      .get("/reviews/hotels" + location.pathname)
      .then(response => {
        console.log("here is your response", response.data.reviews);
        // handle success
        this.setState({
          hotelReviewsData: response.data.reviews
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    console.log("here is what you render", this.state.hotelReviewsData);
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
