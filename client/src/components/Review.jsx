import React from "react";

const Review = props => (
  <div>
    <span>
      <a href="" className="avatar">
        {props.review.username}
        <img src={props.review.profileImage}></img>
      </a>
      wrote a review {props.review.postDate}
    </span>
    <div>
      {props.review.userLocation} {props.review.numberOfContributions}
      contributions {props.review.helpfulVotes} helpful votes
    </div>
    <div>{props.review.reviewScore}</div>
    <div>{props.review.reviewTitle}</div>
    <div>{props.review.reviewText}</div>
    <div>Date of Stay: {props.review.stayDate}</div>
  </div>
);

export default Review;
