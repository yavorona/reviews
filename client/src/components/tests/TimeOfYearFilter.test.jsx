import React from "react";
import { shallow, mount, render } from "enzyme";
import TimeOfYearFilter from "../TimeOfYearFilter";

describe("TimeOfYearFilter", () => {
  it("should invoke the correct onChange method when the Mar-May checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <TimeOfYearFilter
        handleTimeOfYearFilterChange={onChange}
        currentTimeOfYearFilters={new Set([])}
      />
    );
    wrapper
      .find(".mar-may-checkbox")
      .simulate("change", { target: { value: "3, 4, 5" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Jun-Aug checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <TimeOfYearFilter
        handleTimeOfYearFilterChange={onChange}
        currentTimeOfYearFilters={new Set([])}
      />
    );
    wrapper
      .find(".jun-aug-checkbox")
      .simulate("change", { target: { value: "6, 7, 8" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Sep-Nov checkbox is checked", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <TimeOfYearFilter
        handleTimeOfYearFilterChange={onChange}
        currentTimeOfYearFilters={new Set([])}
      />
    );
    wrapper
      .find(".sep-nov-checkbox")
      .simulate("change", { target: { value: "9, 10, 11" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Dec-Feb checkbox is checked", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <TimeOfYearFilter
        handleTimeOfYearFilterChange={onChange}
        currentTimeOfYearFilters={new Set([])}
      />
    );
    wrapper
      .find(".sep-nov-checkbox")
      .simulate("change", { target: { value: "12, 1, 2" } });
    expect(onChange).toHaveBeenCalled();
  });
});
