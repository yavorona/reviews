import React from "react";
import { shallow, mount, render } from "enzyme";
import TravelerTypeFilter from "../TravelerTypeFilter";

describe("TravelerTypeFilter", () => {
  it("should invoke the correct onChange method when the Families checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <TravelerTypeFilter
        handleTravalersTypeFilterChange={onChange}
        currentTravelerTypeFilters={new Set([])}
      />
    );
    wrapper
      .find(".families-checkbox")
      .simulate("change", { target: { value: "Families" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Couples checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <TravelerTypeFilter
        handleTravalersTypeFilterChange={onChange}
        currentTravelerTypeFilters={new Set([])}
      />
    );
    wrapper
      .find(".couples-checkbox")
      .simulate("change", { target: { value: "Couples" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Solo checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <TravelerTypeFilter
        handleTravalersTypeFilterChange={onChange}
        currentTravelerTypeFilters={new Set([])}
      />
    );
    wrapper
      .find(".solo-checkbox")
      .simulate("change", { target: { value: "Solo" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Business checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <TravelerTypeFilter
        handleTravalersTypeFilterChange={onChange}
        currentTravelerTypeFilters={new Set([])}
      />
    );
    wrapper
      .find(".business-checkbox")
      .simulate("change", { target: { value: "Business" } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should invoke the correct onChange method when the Friends checkbox is checked", () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <TravelerTypeFilter
        handleTravalersTypeFilterChange={onChange}
        currentTravelerTypeFilters={new Set([])}
      />
    );
    wrapper
      .find(".friends-checkbox")
      .simulate("change", { target: { value: "Friends" } });
    expect(onChange).toHaveBeenCalled();
  });
});
