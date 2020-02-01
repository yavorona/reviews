import React from "react";
import Enzyme from "enzyme";
import Review from "../Review";
var moment = require("moment");
moment().format();

describe("Review", () => {
  const review = {
    username: "kenny",
    userLocation: "Denver",
    profileImage: "avatar.jpeg",
    numberOfContributions: 2,
    helpfulVotes: 1,
    postDate: "2002-12-10",
    reviewScore: 5,
    reviewTitle: "title",
    reviewText: "Awesome",
    stayDate: "2002-12-09"
  };
  it("displays username", () => {
    //try with contains
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.contains("kenny")).toEqual(true);
  });
  it("displays user location", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".user-location").text()).toEqual("Denver");
  });
  it("displays review date", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".review-date").text()).toEqual(
      " wrote a review " + moment("2002-12-10").fromNow()
    );
  });
  it("displays number of contributions", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".user-contribution").text()).toEqual(
      "2\u00a0contributions"
    );
  });
  it("displays number of helpful votes", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".helpful-votes").text()).toEqual(
      "1\u00a0helpful votes"
    );
  });
  it("should render user image correctly", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".avatar-image").prop("src")).toEqual("avatar.jpeg");
  });
  it("should display review score correctly", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".review-score img").prop("src")).toEqual(
      "five-star.png"
    );
  });
  it("displays review title", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".review-title").text()).toEqual("title");
  });
  it("displays review text", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".review-text").text()).toEqual("Awesome");
  });
  it("displays date of stay", () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find(".stay-date").text()).toEqual(
      moment("2002-12-09").fromNow()
    );
  });
});
