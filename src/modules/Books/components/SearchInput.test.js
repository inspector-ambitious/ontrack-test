import React from "react";
import { shallow } from "enzyme";
import SearchInput from "./SearchInput";

describe("Books/components/SearchInput", () => {
  const setPage = jest.fn();
  const setSearchQuery = jest.fn();
  const defaultProps = {
    setPage,
    searchQuery: "foobar",
    setSearchQuery,
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<SearchInput {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  describe("when search button is clicked", () => {
    it("should call setSearchQuery", () => {
      const wrapper = shallow(<SearchInput {...defaultProps} />);
      wrapper.find("Button").simulate("click");
      expect(setSearchQuery).toHaveBeenCalledTimes(1);
      expect(setSearchQuery).toHaveBeenCalledWith("foobar");
    });
    it("should set the page to 1", () => {
      const wrapper = shallow(<SearchInput {...defaultProps} />);
      wrapper.find("Button").simulate("click");
      expect(setSearchQuery).toHaveBeenCalledTimes(1);
      expect(setPage).toHaveBeenCalledWith(1);
    });
  });
  describe("when enter is pressed", () => {
    it("should call setSearchQuery", () => {
      const wrapper = shallow(<SearchInput {...defaultProps} />);
      wrapper.find("FormControl").simulate("keypress", { key: "Enter" });
      expect(setSearchQuery).toHaveBeenCalledTimes(1);
      expect(setSearchQuery).toHaveBeenCalledWith("foobar");
    });
    it("should set the page to 1", () => {
      const wrapper = shallow(<SearchInput {...defaultProps} />);
      wrapper.find("FormControl").simulate("keypress", { key: "Enter" });
      expect(setSearchQuery).toHaveBeenCalledTimes(1);
      expect(setPage).toHaveBeenCalledWith(1);
    });
  });
  describe("when the user change the value and press enter", () => {
    it("should call setSearchQuery with the appropriate value", () => {
      const wrapper = shallow(<SearchInput {...defaultProps} />);
      wrapper
        .find("FormControl")
        .simulate("change", { target: { value: "baz" } });
      wrapper.find("FormControl").simulate("keypress", { key: "Enter" });
      expect(setSearchQuery).toHaveBeenCalledTimes(1);
      expect(setSearchQuery).toHaveBeenCalledWith("baz");
    });
  });
});
