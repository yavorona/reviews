import React from "react";
import { shallow, mount, render } from "../../enzyme";

import ReviewsView from "../ReviewsView";
import ReviewsControls from "../ReviewsControls";

describe("Our test suite", () => {
  it("renders without crashing", () => {
    render(<ReviewsView />);
  });
});
