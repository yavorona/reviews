import React from "react";
import { shallow, mount, render } from "enzyme";
import ReviewsControls from "../ReviewsControls";
import RatingsFilter from "../RatingsFilter";
import TimeOfYearFilter from "../TimeOfYearFilter";
import TravelerTypeFilter from "../TravelerTypeFilter";
import LanguageTypeFilter from "../LanguageTypeFilter";
describe("ReviewsControls", () => {
  it("passes down handleRatingFilterChange to RatingsFilter", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <ReviewsControls handleRatingFilterChange={onChange} />
    );
    expect(
      wrapper.containsMatchingElement(
        <RatingsFilter handleRatingFilterChange={onChange} />
      )
    ).toBe(true);
  });
  it("passes down handleTimeOfYearFilterChange to TimeOfYearFilter", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <ReviewsControls handleTimeOfYearFilterChange={onChange} />
    );
    expect(
      wrapper.containsMatchingElement(
        <TimeOfYearFilter handleTimeOfYearFilterChange={onChange} />
      )
    ).toBe(true);
  });
  it("passes down handleTravalersTypeFilterChange to TravelerTypeFilter", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <ReviewsControls handleTravalersTypeFilterChange={onChange} />
    );
    expect(
      wrapper.containsMatchingElement(
        <TravelerTypeFilter handleTravalersTypeFilterChange={onChange} />
      )
    ).toBe(true);
  });
  it("passes down currentRatingFilters to RatingsFilter", () => {
    const currentRatingFilters = new Set([]);
    const wrapper = shallow(
      <ReviewsControls currentRatingFilters={currentRatingFilters} />
    );
    expect(
      wrapper.containsMatchingElement(
        <RatingsFilter currentRatingFilters={currentRatingFilters} />
      )
    ).toBe(true);
  });
  it("passes down currentTimeOfYearFilters to TimeOfYearFilter", () => {
    const currentTimeOfYearFilters = new Set([]);
    const wrapper = shallow(
      <ReviewsControls currentTimeOfYearFilters={currentTimeOfYearFilters} />
    );
    expect(
      wrapper.containsMatchingElement(
        <TimeOfYearFilter currentTimeOfYearFilters={currentTimeOfYearFilters} />
      )
    ).toBe(true);
  });
  it("passes down currentTravelerTypeFilters to TravelerTypeFilter", () => {
    const currentTravelerTypeFilters = new Set([]);
    const wrapper = shallow(
      <ReviewsControls
        currentTravelerTypeFilters={currentTravelerTypeFilters}
      />
    );
    expect(
      wrapper.containsMatchingElement(
        <TravelerTypeFilter
          currentTravelerTypeFilters={currentTravelerTypeFilters}
        />
      )
    ).toBe(true);
  });
});
