import React from "react";

class RatingsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleRatingFilterChange = this.handleRatingFilterChange.bind(this);
  }

  handleRatingFilterChange(e) {
    this.props.handleRatingFilterChange(parseInt(e.target.value));
  }

  render() {
    return (
      <div className="rating">
        <div className="filter-header">Traveler rating</div>
        <ul className="filter-table">
          <li className="checkbox">
            <label className="container">
              <input
                className="excellent-checkbox"
                name="excellent"
                type="checkbox"
                value="5"
                checked={this.props.currentRatingFilters.has(5)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Excellent &nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress className="progress" value="15" max="20"></progress>
                &nbsp;&nbsp;&nbsp;15
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="container">
              <input
                className="very-good-checkbox"
                name="very-good"
                type="checkbox"
                value="4"
                checked={this.props.currentRatingFilters.has(4)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Very Good &nbsp;
              <span className="rownumber">
                <progress className="progress" value="4" max="20"></progress>
                &nbsp;&nbsp;&nbsp;4
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="container">
              <input
                className="average-checkbox"
                name="average"
                type="checkbox"
                value="3"
                checked={this.props.currentRatingFilters.has(3)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Average
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress className="progress" value="11" max="20"></progress>
                &nbsp;&nbsp;&nbsp;11
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="container">
              <input
                className="poor-checkbox"
                name="poor"
                type="checkbox"
                value="2"
                checked={this.props.currentRatingFilters.has(2)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Poor
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress className="progress" value="7" max="20"></progress>
                &nbsp;&nbsp;&nbsp;7
              </span>
            </label>
          </li>
          <li className="checkbox">
            <label className="container">
              <input
                className="terrible-checkbox"
                name="terrible"
                type="checkbox"
                value="1"
                checked={this.props.currentRatingFilters.has(1)}
                onChange={this.handleRatingFilterChange}
              />
              <span className="checkmark"></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terrible
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="rownumber">
                <progress className="progress" value="4" max="20"></progress>
                &nbsp;&nbsp;&nbsp;4
              </span>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default RatingsFilter;
