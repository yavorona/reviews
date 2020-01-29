import React from "react";

class TravelerTypeFilter extends React.Component {
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
    );
  }
}

export default TravelerTypeFilter;
