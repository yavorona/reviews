import React from "react";

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
      <div className="nav">
        <span
          className={
            this.state.view === "reviews" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => this.changeView("reviews")}
        >
          Reviews
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
            this.state.view === "room_tips" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => this.changeView("room_tips")}
        >
          Room tips
        </span>
      </div>
    );
  }
}

export default App;
