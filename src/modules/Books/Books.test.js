import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { waitFor } from "@testing-library/react";
import Books from "./Books";

describe("Books/Books", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should render the loader when the data is loading", async () => {
    const wrapper = mount(
      <Router>
        <Books />
      </Router>
    );
    expect(wrapper.find("Loader").length).toEqual(1);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });

  it("should render an error if the fetch fail", async () => {
    fetch.mockReject(new Error("fake error message"));
    const wrapper = mount(
      <Router>
        <Books />
      </Router>
    );
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    wrapper.update();
    expect(wrapper.find("UnexpectedError").length).toEqual(1);
  });

  it("should render the cards and the pagination toolbars when the data is loaded", async () => {
    fetch.mockResponseOnce(JSON.stringify({ books: [], count: 0 }));
    const wrapper = mount(
      <Router>
        <Books />
      </Router>
    );
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    wrapper.update();
    expect(wrapper.find("Cards").length).toEqual(1);
    expect(wrapper.find("PaginationToolbar").length).toEqual(2);
  });
});
