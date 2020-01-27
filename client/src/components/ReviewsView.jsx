import React from "react";
import ReviewsControls from "./ReviewsControls.jsx";
import Reviews from "./Reviews.jsx";

class ReviewsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Reviews
        <ReviewsControls />
        <Reviews />
      </div>
    );
  }
}

export default ReviewsView;
