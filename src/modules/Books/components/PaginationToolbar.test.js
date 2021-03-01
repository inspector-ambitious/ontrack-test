import React from "react";
import { shallow } from "enzyme";
import PaginationToolbar from "./PaginationToolbar";

describe("Books/components/PaginationToolbar", () => {
  const setPage = jest.fn();
  const defaultProps = {
    page: 2,
    maxPage: 7,
    setPage,
  };
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should render without crashing", () => {
    const wrapper = shallow(<PaginationToolbar {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  describe("First", () => {
    it("should be disabled if the current page is 1", () => {
      const wrapper = shallow(<PaginationToolbar {...defaultProps} page={1} />);
      expect(wrapper.find("First").props().disabled).toBe(true);
    });
    it("should call set the page to 1 on click", () => {
      const wrapper = shallow(<PaginationToolbar {...defaultProps} />);
      wrapper.find("First").simulate("click");
      expect(setPage).toHaveBeenCalledTimes(1);
      expect(setPage).toHaveBeenCalledWith(1);
    });
  });
  describe("Prev", () => {
    it("should be disabled if the current page is 1", () => {
      const wrapper = shallow(<PaginationToolbar {...defaultProps} page={1} />);
      expect(wrapper.find("Prev").props().disabled).toBe(true);
    });
    it("should set the page to (current page - 1) on click", () => {
      const wrapper = shallow(<PaginationToolbar {...defaultProps} />);
      wrapper.find("Prev").simulate("click");
      expect(setPage).toHaveBeenCalledTimes(1);
      expect(setPage).toHaveBeenCalledWith(1);
    });
  });
  describe("Last", () => {
    it("should be disabled if the current page is equal to maxPage", () => {
      const wrapper = shallow(<PaginationToolbar {...defaultProps} page={7} />);
      expect(wrapper.find("Last").props().disabled).toBe(true);
    });
    it("should set the page to max page on click", () => {
      const wrapper = shallow(<PaginationToolbar {...defaultProps} />);
      wrapper.find("Last").simulate("click");
      expect(setPage).toHaveBeenCalledTimes(1);
      expect(setPage).toHaveBeenCalledWith(7);
    });
  });
});
