import React from "react";
import { shallow, mount, render } from "enzyme";
import RatingsFilter from "../RatingsFilter";

describe("RatingsFilter", () => {
  it("should invoke the correct onChange method when the Excellent checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <RatingsFilter
        handleRatingFilterChange={onChange}
        currentRatingFilters={new Set([])}
      />
    );
    wrapper
      .find(".excellent-checkbox")
      .simulate("change", { target: { value: "5" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Very Good checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <RatingsFilter
        handleRatingFilterChange={onChange}
        currentRatingFilters={new Set([])}
      />
    );
    wrapper
      .find(".very-good-checkbox")
      .simulate("change", { target: { value: "4" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Average checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <RatingsFilter
        handleRatingFilterChange={onChange}
        currentRatingFilters={new Set([])}
      />
    );
    wrapper
      .find(".average-checkbox")
      .simulate("change", { target: { value: "3" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Poor checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <RatingsFilter
        handleRatingFilterChange={onChange}
        currentRatingFilters={new Set([])}
      />
    );
    wrapper
      .find(".poor-checkbox")
      .simulate("change", { target: { value: "2" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Terrible checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <RatingsFilter
        handleRatingFilterChange={onChange}
        currentRatingFilters={new Set([])}
      />
    );
    wrapper
      .find(".terrible-checkbox")
      .simulate("change", { target: { value: "1" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("should invoke the correct onChange method when the Terrible checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <RatingsFilter
        handleRatingFilterChange={onChange}
        currentRatingFilters={new Set([])}
      />
    );
    wrapper
      .find(".terrible-checkbox")
      .simulate("change", { target: { value: "1" } });
    expect(onChange).toHaveBeenCalled();
  });
});
