import React from "react";
// import {
//   DropdownButton,
//   Dropdown,
//   DropdownMenu,
//   DropdownToggle,
//   DropdownItem
// } from "reactstrap";

class ReviewsControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExcellent: false
    };
    this.handleRatingFilterChange = this.handleRatingFilterChange.bind(this);
  }

  handleRatingFilterChange(e) {
    this.props.handleRatingFilterChange(parseInt(e.target.value));
  }

  render() {
    return (
      <div className="review-control-title">
        <div className="review-header">
          <div className="header-divider">
            <h2 className="review-header-text">Reviews</h2>
          </div>
          <div>
            <button className="write-review-button">Write a Review</button>
          </div>
        </div>

        <div className="review-filters-wrap">
          <div className="ui_columns">
            {/* <--------------------------rating---------------------> */}
            <div className="rating">
              <div className="filter-header">Traveler rating</div>
              <ul className="filter-table">
                <li className="checkbox">
                  <label>
                    <input
                      name="excellent"
                      type="checkbox"
                      value="5"
                      checked={this.props.currentRatingFilters.has(5)}
                      onChange={this.handleRatingFilterChange}
                    />
                    Excellent
                    <span className="review-rating-bar-cell">
                      <span className="review-rating-bar">
                        <span className="rowfill"></span>
                      </span>
                    </span>
                    <span className="rownumber">800</span>
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="very-good"
                      type="checkbox"
                      value="4"
                      checked={this.props.currentRatingFilters.has(4)}
                      onChange={this.handleRatingFilterChange}
                    />
                    Very Good
                    <span className="review-rating-bar-cell">
                      <span className="review-rating-bar">
                        <span className="rowfill"></span>
                      </span>
                    </span>
                    <span className="rownumber">800</span>
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="average"
                      type="checkbox"
                      value="3"
                      checked={this.props.currentRatingFilters.has(3)}
                      onChange={this.handleRatingFilterChange}
                    />
                    Average
                    <span className="review-rating-bar-cell">
                      <span className="review-rating-bar">
                        <span className="rowfill"></span>
                      </span>
                    </span>
                    <span className="rownumber">800</span>
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="poor"
                      type="checkbox"
                      value="2"
                      checked={this.props.currentRatingFilters.has(2)}
                      onChange={this.handleRatingFilterChange}
                    />
                    Poor
                    <span className="review-rating-bar-cell">
                      <span className="review-rating-bar">
                        <span className="rowfill"></span>
                      </span>
                    </span>
                    <span className="rownumber">800</span>
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="terrible"
                      type="checkbox"
                      value="1"
                      checked={this.props.currentRatingFilters.has(1)}
                      onChange={this.handleRatingFilterChange}
                    />
                    Terrible
                    <span className="review-rating-bar-cell">
                      <span className="review-rating-bar">
                        <span className="rowfill"></span>
                      </span>
                    </span>
                    <span className="rownumber">800</span>
                  </label>
                </li>
              </ul>
            </div>
            {/* <--------------------------time-of-year---------------------> */}
            <div className="time-of-the-year">
              <div className="filter-header">Time of year</div>
              <ul className="filter-table">
                <li className="checkbox">
                  <label>
                    <input
                      name="mar-may"
                      type="checkbox"
                      //value=
                      // checked={this.state.marMay}
                      // onChange={this.handleInputMarMay}
                    />
                    Mar-May
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="jun-aug"
                      type="checkbox"
                      //value=
                      // checked={this.state.junAug}
                      // onChange={this.handleInputJunAug}
                    />
                    Jun-Aug
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="sep-nov"
                      type="checkbox"
                      //value=
                      // checked={this.state.sepNov}
                      // onChange={this.handleInputSepNov}
                    />
                    Sep-Nov
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="dec-feb"
                      type="checkbox"
                      //value=
                      // checked={this.state.decFeb}
                      // onChange={this.handleInputDecFeb}
                    />
                    Dec-Feb
                  </label>
                </li>
              </ul>
            </div>
            {/* <--------------------------traveler-type--------------------> */}
            <div className="traveler-type">
              <div className="filter-header">Traveler type</div>
              <ul className="filter-table">
                <li className="checkbox">
                  <label>
                    <input
                      name="families"
                      type="checkbox"
                      //value=
                      // checked={this.state.families}
                      // onChange={this.handleInputFamilies}
                    />
                    Families
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="couples"
                      type="checkbox"
                      //value=
                      // checked={this.state.families}
                      // onChange={this.handleInputFamilies}
                    />
                    Couples
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="solo"
                      type="checkbox"
                      //value=
                      // checked={this.state.solo}
                      // onChange={this.handleInputSolo}
                    />
                    Solo
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="business"
                      type="checkbox"
                      //value=
                      // checked={this.state.business}
                      // onChange={this.handleInputbBsiness}
                    />
                    Business
                  </label>
                </li>
                <li className="checkbox">
                  <label>
                    <input
                      name="friends"
                      type="checkbox"
                      //value=
                      // checked={this.state.friends}
                      // onChange={this.handleInputFriends}
                    />
                    Friends
                  </label>
                </li>
              </ul>
            </div>
            {/* <--------------------------language------------------------> */}
            <div className="language">
              <div className="filter-header">Language</div>
              <ul className="filter-table">
                <li className="checkbox">
                  <label>
                    <input
                      name="all-languages"
                      type="checkbox"
                      //value=
                      // checked={this.state.enlgish}
                      // onChange={this.handleInputEnglish}
                    />
                    All languages
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsControls;
