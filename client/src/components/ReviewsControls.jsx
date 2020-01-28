import React from "react";
import {
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

class ReviewsControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reviewControlTitle">
        <div className="reviewHeader">
          <div className="headerDivider">
            <h2 className="reviewHeaderText">Reviews</h2>
          </div>
          <div>
            <button className="writeReviewButton">Write a Review</button>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}

export default ReviewsControls;
