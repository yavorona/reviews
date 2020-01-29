import React from "react";
import ReviewsControls from "./ReviewsControls.jsx";
import Reviews from "./Reviews.jsx";
import { set } from "mongoose";
const axios = require("axios");

class ReviewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelReviewsData: [],
      currentRatingFilters: new Set([])
    };
    this.handleRatingFilterChange = this.handleRatingFilterChange.bind(this);
  }

  handleRatingFilterChange(filterValue) {
    if (this.state.currentRatingFilters.has(filterValue)) {
      var newCurrentRatingFilters = this.state.currentRatingFilters;
      newCurrentRatingFilters.delete(filterValue);
      this.setState({
        currentRatingFilters: newCurrentRatingFilters
      });
    } else {
      var newCurrentRatingFilters = this.state.currentRatingFilters;
      newCurrentRatingFilters.add(filterValue);
      this.setState({
        currentRatingFilters: newCurrentRatingFilters
      });
    }
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
    var filteredReviews = this.state.hotelReviewsData;
    if (this.state.currentRatingFilters.size !== 0) {
      filteredReviews = filteredReviews.filter(review =>
        this.state.currentRatingFilters.has(review.reviewScore)
      );
    }

    console.log("here is what you render", this.state.hotelReviewsData);
    return (
      <div>
        Reviews
        <ReviewsControls
          hotelReviewsData={this.state.hotelReviewsData}
          currentRatingFilters={this.state.currentRatingFilters}
          handleRatingFilterChange={this.handleRatingFilterChange}
        />
        <Reviews hotelReviewsData={filteredReviews} />
      </div>
    );
  }
}

export default ReviewsView;
