import React from "react";
import Review from "./Review.jsx";

const Reviews = props => {
  return (
    <div className="all-reviews-wrapper">
      {props.hotelReviewsData.map(review => (
        <Review review={review} key={review._id} />
      ))}
    </div>
  );
};

export default Reviews;
