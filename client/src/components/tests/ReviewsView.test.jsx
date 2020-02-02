import React from "react";
import { shallow, mount, render } from "enzyme";
import ReviewsView from "../ReviewsView";
import ReviewsControls from "../ReviewsControls";

describe("ReviewsView", () => {
  it("has the initial state of currentRatingFilters as an empty set", () => {
    const wrapper = shallow(<ReviewsView />);
    expect(wrapper.state("currentRatingFilters")).toEqual(new Set([]));
  });
  it("correctly updates the state when handleRatingFilterChange is called once", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleRatingFilterChange(5);
    expect(wrapper.state("currentRatingFilters")).toEqual(new Set([5]));
  });
  it("correctly updates the state when handleRatingFilterChange is called twice with same input", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleRatingFilterChange(5);
    expect(wrapper.state("currentRatingFilters")).toEqual(new Set([5]));
    wrapper.instance().handleRatingFilterChange(5);
    expect(wrapper.state("currentRatingFilters")).toEqual(new Set([]));
  });
  it("correctly updates the state when handleRatingFilterChange is called muptiple times with different inputs", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleRatingFilterChange(1);
    wrapper.instance().handleRatingFilterChange(2);
    wrapper.instance().handleRatingFilterChange(3);
    wrapper.instance().handleRatingFilterChange(4);
    wrapper.instance().handleRatingFilterChange(5);
    expect(wrapper.state("currentRatingFilters")).toEqual(
      new Set([1, 2, 3, 4, 5])
    );
    wrapper.instance().handleRatingFilterChange(5);
    expect(wrapper.state("currentRatingFilters")).toEqual(
      new Set([1, 2, 3, 4])
    );
  });

  it("has the initial state of currentTravelerTypeFilters as an empty set", () => {
    const wrapper = shallow(<ReviewsView />);
    expect(wrapper.state("currentTravelerTypeFilters")).toEqual(new Set([]));
  });
  it("correctly updates the state when handleTravalersTypeFilterChange is called once", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleTravalersTypeFilterChange("Solo");
    expect(wrapper.state("currentTravelerTypeFilters")).toEqual(
      new Set(["Solo"])
    );
  });
  it("correctly updates the state when handleTravalersTypeFilterChange is called twice with same input", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleTravalersTypeFilterChange("Families");
    expect(wrapper.state("currentTravelerTypeFilters")).toEqual(
      new Set(["Families"])
    );
    wrapper.instance().handleTravalersTypeFilterChange("Families");
    expect(wrapper.state("currentTravelerTypeFilters")).toEqual(new Set([]));
  });
  it("correctly updates the state when handleTravalersTypeFilterChange is called muptiple times with different inputs", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleTravalersTypeFilterChange("a");
    wrapper.instance().handleTravalersTypeFilterChange("b");
    wrapper.instance().handleTravalersTypeFilterChange("c");
    wrapper.instance().handleTravalersTypeFilterChange("d");
    wrapper.instance().handleTravalersTypeFilterChange("e");
    expect(wrapper.state("currentTravelerTypeFilters")).toEqual(
      new Set(["a", "b", "c", "d", "e"])
    );
    wrapper.instance().handleTravalersTypeFilterChange("e");
    expect(wrapper.state("currentTravelerTypeFilters")).toEqual(
      new Set(["a", "b", "c", "d"])
    );
  });

  it("has the initial state of currentTimeOfYearFilters as an empty set", () => {
    const wrapper = shallow(<ReviewsView />);
    expect(wrapper.state("currentTimeOfYearFilters")).toEqual(new Set([]));
  });
  it("correctly updates the state when handleTimeOfYearFilterChange is called once", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleTimeOfYearFilterChange([3, 4, 5]);
    expect(wrapper.state("currentTimeOfYearFilters")).toEqual(
      new Set([3, 4, 5])
    );
  });
  it("correctly updates the state when handleTimeOfYearFilterChange is called twice with same input", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleTimeOfYearFilterChange([3, 4, 5]);
    expect(wrapper.state("currentTimeOfYearFilters")).toEqual(
      new Set([3, 4, 5])
    );
    wrapper.instance().handleTimeOfYearFilterChange([3, 4, 5]);
    expect(wrapper.state("currentTimeOfYearFilters")).toEqual(new Set([]));
  });
  it("correctly updates the state when handleTimeOfYearFilterChange is called muptiple times with different inputs", () => {
    const wrapper = shallow(<ReviewsView />);
    wrapper.instance().handleTimeOfYearFilterChange([3, 4, 5]);
    wrapper.instance().handleTimeOfYearFilterChange([6, 7, 8]);
    wrapper.instance().handleTimeOfYearFilterChange([9, 10, 11]);
    wrapper.instance().handleTimeOfYearFilterChange([12, 1, 2]);
    expect(wrapper.state("currentTimeOfYearFilters")).toEqual(
      new Set([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2])
    );
    wrapper.instance().handleTimeOfYearFilterChange([12, 1, 2]);
    expect(wrapper.state("currentTimeOfYearFilters")).toEqual(
      new Set([3, 4, 5, 6, 7, 8, 9, 10, 11])
    );
  });
});
