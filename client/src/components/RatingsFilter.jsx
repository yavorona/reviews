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
            <label>
              <input
                name="excellent"
                type="checkbox"
                value="5"
                checked={this.props.currentRatingFilters.has(5)}
                onChange={this.handleRatingFilterChange}
              />
              Excellent &nbsp;
              <span className="review-rating-bar-cell">
                <span className="review-rating-bar">
                  <span className="rowfill"></span>
                </span>
              </span>
              <span className="rownumber">
                <progress
                  className="progress-bar"
                  value="15"
                  max="20"
                ></progress>
                &nbsp;&nbsp;&nbsp;15
              </span>
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
              <span className="rownumber">
                <progress
                  className="progress-bar"
                  value="4"
                  max="20"
                ></progress>
                &nbsp;&nbsp;&nbsp;4
              </span>
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
              Average&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="review-rating-bar-cell">
                <span className="review-rating-bar">
                  <span className="rowfill"></span>
                </span>
              </span>
              <span className="rownumber">
                <progress
                  className="progress-bar"
                  value="2"
                  max="20"
                ></progress>
                &nbsp;&nbsp;&nbsp;2
              </span>
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
              Poor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="review-rating-bar-cell">
                <span className="review-rating-bar">
                  <span className="rowfill"></span>
                </span>
              </span>
              <span className="rownumber">
                <progress
                  className="progress-bar"
                  value="5"
                  max="20"
                ></progress>
                &nbsp;&nbsp;&nbsp;5
              </span>
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
              Terrible&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="review-rating-bar-cell">
                <span className="review-rating-bar">
                  <span className="rowfill"></span>
                </span>
              </span>
              <span className="rownumber">
                <progress
                  className="progress-bar"
                  value="1"
                  max="20"
                ></progress>
                &nbsp;&nbsp;&nbsp;1
              </span>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default RatingsFilter;
