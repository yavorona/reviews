import React from "react";

class TimeOfYearFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExcellent: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkFilter = this.checkFilter.bind(this);
  }

  handleChange(e) {
    var months = e.target.value.split(",").map(function(item) {
      return parseInt(item, 10);
    });
    this.props.handleTimeOfYearFilterChange(months);
  }

  checkFilter(months) {
    var exist = true;
    months.forEach(month => {
      if (!this.props.currentTimeOfYearFilters.has(month)) {
        exist = false;
      }
    });
    return exist;
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
                value={[3, 4, 5]}
                checked={this.checkFilter([3, 4, 5])}
                onChange={this.handleChange}
              />
              Mar-May
            </label>
          </li>
          <li className="checkbox">
            <label>
              <input
                name="jun-aug"
                type="checkbox"
                value={[6, 7, 8]}
                checked={this.checkFilter([6, 7, 8])}
                onChange={this.handleChange}
              />
              Jun-Aug
            </label>
          </li>
          <li className="checkbox">
            <label>
              <input
                name="sep-nov"
                type="checkbox"
                value={[9, 10, 11]}
                checked={this.checkFilter([9, 10, 11])}
                onChange={this.handleChange}
              />
              Sep-Nov
            </label>
          </li>
          <li className="checkbox">
            <label>
              <input
                name="dec-feb"
                type="checkbox"
                value={[12, 1, 2]}
                checked={this.checkFilter([12, 1, 2])}
                onChange={this.handleChange}
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
