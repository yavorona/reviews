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
      currentRatingFilters: new Set([]),
      currentTravelerTypeFilters: new Set([]),
      currentTimeOfYearFilters: new Set([])
    };
    this.handleRatingFilterChange = this.handleRatingFilterChange.bind(this);
    this.handleTravalersTypeFilterChange = this.handleTravalersTypeFilterChange.bind(
      this
    );
    this.handleTimeOfYearFilterChange = this.handleTimeOfYearFilterChange.bind(
      this
    );
    this.getFilterReviews = this.getFilterReviews.bind(this);
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

  handleTravalersTypeFilterChange(travalerType) {
    if (this.state.currentTravelerTypeFilters.has(travalerType)) {
      var newCurrentTravalerTypeFilters = this.state.currentTravelerTypeFilters;
      newCurrentTravalerTypeFilters.delete(travalerType);
      this.setState({
        currentTravelerTypeFilters: newCurrentTravalerTypeFilters
      });
    } else {
      var newCurrentTravalerTypeFilters = this.state.currentTravelerTypeFilters;
      newCurrentTravalerTypeFilters.add(travalerType);
      this.setState({
        currentTravelerTypeFilters: newCurrentTravalerTypeFilters
      });
    }
  }

  handleTimeOfYearFilterChange(months) {
    months.forEach(month => {
      if (this.state.currentTimeOfYearFilters.has(month)) {
        var newTimeOfYearFilters = this.state.currentTimeOfYearFilters;
        newTimeOfYearFilters.delete(month);
        this.setState({
          currentTimeOfYearFilters: newTimeOfYearFilters
        });
      } else {
        var newTimeOfYearFilters = this.state.currentTimeOfYearFilters;
        newTimeOfYearFilters.add(month);
        this.setState({
          currentTimeOfYearFilters: newTimeOfYearFilters
        });
      }
    });
  }

  getFilterReviews() {
    var filteredReviews = this.state.hotelReviewsData;

    var ratingFilter = reviewScore => {
      if (this.state.currentRatingFilters.size === 0) {
        return true;
      }
      return this.state.currentRatingFilters.has(reviewScore);
    };

    var travalerFilter = travelerType => {
      if (this.state.currentTravelerTypeFilters.size === 0) {
        return true;
      }
      return this.state.currentTravelerTypeFilters.has(travelerType);
    };

    var timeOfYearFilter = month => {
      if (this.state.currentTimeOfYearFilters.size === 0) {
        return true;
      }
      return this.state.currentTimeOfYearFilters.has(month);
    };

    filteredReviews = filteredReviews.filter(review => {
      var reviewDate = new Date(review.postDate);
      var reviewMonth = reviewDate.getUTCMonth() + 1;
      return (
        ratingFilter(review.reviewScore) &&
        travalerFilter(review.travelerType) &&
        timeOfYearFilter(reviewMonth)
      );
    });

    return filteredReviews;
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
    var filteredReviews = this.getFilterReviews();
    console.log("here is what you render", this.state.hotelReviewsData);
    return (
      <div>
        Reviews
        <ReviewsControls
          hotelReviewsData={this.state.hotelReviewsData}
          currentRatingFilters={this.state.currentRatingFilters}
          handleRatingFilterChange={this.handleRatingFilterChange}
          currentTravelerTypeFilters={this.state.currentTravelerTypeFilters}
          handleTravalersTypeFilterChange={this.handleTravalersTypeFilterChange}
          currentTimeOfYearFilters={this.state.currentTimeOfYearFilters}
          handleTimeOfYearFilterChange={this.handleTimeOfYearFilterChange}
        />
        <Reviews hotelReviewsData={filteredReviews} />
      </div>
    );
  }
}

export default ReviewsView;
