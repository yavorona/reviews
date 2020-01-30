import React from "react";
var moment = require("moment");
moment().format();

const Review = props => {
  let score;
  let stayDate = moment(props.review.stayDate).fromNow();
  let postDate = moment(props.review.postDate).fromNow();
  if (props.review.reviewScore === 5) {
    score = <img src="five-star.png"></img>;
  }
  if (props.review.reviewScore === 4) {
    score = <img src="four-star.png"></img>;
  }
  if (props.review.reviewScore === 3) {
    score = <img src="three-star.png"></img>;
  }
  if (props.review.reviewScore === 2) {
    score = <img src="two-star.png"></img>;
  }
  if (props.review.reviewScore === 1) {
    score = <img src="one-star.png"></img>;
  }

  return (
    <div className="review-wrapper">
      <div className="single-review-header">
        <div className="avatar">
          <img src={props.review.profileImage}></img>
        </div>
        <div className="user-info">
          <span className="username">{props.review.username}</span>
          <span className="review-date"> wrote a review {postDate}</span>
          <span>
            <img className="dots" src="dots.png"></img>
          </span>
        </div>

        <div className="user-info">
          <ul className="user-list">
            <li>{props.review.userLocation}</li>
            <li>
              {props.review.numberOfContributions}
              &nbsp;contributions
            </li>
            <li>{props.review.helpfulVotes}&nbsp;helpful votes</li>
          </ul>
        </div>
      </div>
      <div className="review-body">
        <div className="review-score">{score}</div>
        <div className="review-title">{props.review.reviewTitle}</div>
        <div className="review-text">{props.review.reviewText}</div>
        <div className="review-stay-data">
          <span className="date-of-stay">Date of stay: </span>
          <span className="stay-date">{stayDate}</span>
        </div>
      </div>
      <div className="review-bottom"></div>
    </div>
  );
};

export default Review;
