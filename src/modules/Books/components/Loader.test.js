import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";

describe("Books/components/Loader", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
