import React from "react";
import ReviewsView from "./ReviewsView.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "reviews",
      reviews: []
    };
  }
  changeView(option) {
    this.setState({
      view: option
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span>
            <span
              className={
                this.state.view === "reviews"
                  ? "nav-selected"
                  : "nav-unselected"
              }
              onClick={() => this.changeView("reviews")}
            >
              Reviews
            </span>
          </span>
          <span
            className={
              this.state.view === "q&a" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("q&a")}
          >
            Q+A
          </span>
          <span
            className={
              this.state.view === "room_tips"
                ? "nav-selected"
                : "nav-unselected"
            }
            onClick={() => this.changeView("room_tips")}
          >
            Room tips
          </span>
        </div>
        <div className="main">
          {this.state.view === "reviews" ? <ReviewsView /> : "IN PRODUCTION"}
        </div>
      </div>
    );
  }
}

export default App;
