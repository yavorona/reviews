import React from "react";

class TravelerTypeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExcellent: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleTravalersTypeFilterChange(e.target.value);
  }

  render() {
    return (
      <div className="traveler-type">
        <div className="filter-header">Traveler type</div>
        <ul className="filter-table">
          <li className="checkbox">
            <label>
              <input
                name="families"
                type="checkbox"
                value="Families"
                checked={this.props.currentTravelerTypeFilters.has("Families")}
                onChange={this.handleChange}
              />
              Families
            </label>
          </li>
          <li className="checkbox">
            <label>
              <input
                name="couples"
                type="checkbox"
                value="Couples"
                checked={this.props.currentTravelerTypeFilters.has("Couples")}
                onChange={this.handleChange}
              />
              Couples
            </label>
          </li>
          <li className="checkbox">
            <label>
              <input
                name="solo"
                type="checkbox"
                value="Solo"
                checked={this.props.currentTravelerTypeFilters.has("Solo")}
                onChange={this.handleChange}
              />
              Solo
            </label>
          </li>
          <li className="checkbox">
            <label>
              <input
                name="business"
                type="checkbox"
                value="Business"
                checked={this.props.currentTravelerTypeFilters.has("Business")}
                onChange={this.handleChange}
              />
              Business
            </label>
          </li>
          <li className="checkbox">
            <label>
              <input
                name="friends"
                type="checkbox"
                value="Friends"
                checked={this.props.currentTravelerTypeFilters.has("Friends")}
                onChange={this.handleChange}
              />
              Friends
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default TravelerTypeFilter;
