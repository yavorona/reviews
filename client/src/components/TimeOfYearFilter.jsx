import React from "react";

class TimeOfYearFilter extends React.Component {
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
    );
  }
}

export default TimeOfYearFilter;
