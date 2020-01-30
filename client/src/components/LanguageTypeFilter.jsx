import React from "react";

class LanguageTypeFilter extends React.Component {
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
    );
  }
}

export default LanguageTypeFilter;
