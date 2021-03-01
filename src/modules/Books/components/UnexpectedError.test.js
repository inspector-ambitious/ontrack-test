import React from "react";
import { shallow } from "enzyme";
import UnexpectedError from "./UnexpectedError";

describe("Books/components/UnexpectedError", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<UnexpectedError />);
    expect(wrapper).toMatchSnapshot();
  });
});
