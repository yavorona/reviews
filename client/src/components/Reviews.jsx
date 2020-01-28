import React from "react";
import Review from "./Review.jsx";

const Reviews = props => (
  <div>
    {props.hotelReviewsData.map(review => (
      <Review review={review} key={review._id} />
    ))}
  </div>
);

export default Reviews;
