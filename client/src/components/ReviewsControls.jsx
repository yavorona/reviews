import React from "react";
import RatingsFilter from "./RatingsFilter.jsx";
import TimeOfYearFilter from "./TimeOfYearFilter.jsx";
import TravelerTypeFilter from "./TravelerTypeFilter.jsx";
import LanguageTypeFilter from "./LanguageTypeFilter.jsx";

class ReviewsControls extends React.Component {
  constructor(props) {
    super(props);
    this.handleRatingFilterChange = this.handleRatingFilterChange.bind(this);
  }

  handleRatingFilterChange(e) {
    this.props.handleRatingFilterChange(parseInt(e.target.value));
  }

  render() {
    return (
      <div className="review-control-title">
        <div className="review-header">
          <div className="reviews-divider">
            <h2 className="review-header-text">Reviews</h2>
          </div>
          <div className="write-review">
            <button className="write-review-button">Write a Review</button>
          </div>
        </div>

        <div className="review-filters-wrap">
          <div className="ui-columns">
            <RatingsFilter
              hotelReviewsData={this.props.hotelReviewsData}
              currentRatingFilters={this.props.currentRatingFilters}
              handleRatingFilterChange={this.props.handleRatingFilterChange}
            />
            <TimeOfYearFilter
              currentTimeOfYearFilters={this.props.currentTimeOfYearFilters}
              handleTimeOfYearFilterChange={
                this.props.handleTimeOfYearFilterChange
              }
            />
            <TravelerTypeFilter
              currentTravelerTypeFilters={this.props.currentTravelerTypeFilters}
              handleTravalersTypeFilterChange={
                this.props.handleTravalersTypeFilterChange
              }
            />
            <LanguageTypeFilter />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsControls;
