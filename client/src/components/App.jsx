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
      <div className="wrapper">
        <div className="nav">
          <div
            className={
              this.state.view === "reviews" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("reviews")}
          >
            <div className="tab-icon">
              <img className="nav-icon" src="pen-and-paper.png"></img>
            </div>
            <div className="tab-name">
              <span>Reviews</span>
            </div>
          </div>
          <div
            className={
              this.state.view === "q&a" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("q&a")}
          >
            <div className="tab-icon">
              <img className="nav-icon" src="q_and_a.png"></img>
            </div>
            <div className="tab-name">
              <span>Q+A</span>
            </div>
          </div>

          <div
            className={
              this.state.view === "room_tips"
                ? "nav-selected"
                : "nav-unselected"
            }
            onClick={() => this.changeView("room_tips")}
          >
            <div className="tab-icon">
              <img className="nav-icon" src="lightbolb.png"></img>
            </div>
            <div className="tab-name">
              <span>Room tips</span>
            </div>
          </div>
        </div>
        <div className="main">
          {this.state.view === "reviews" ? <ReviewsView /> : "IN PRODUCTION"}
        </div>
      </div>
    );
  }
}

export default App;
