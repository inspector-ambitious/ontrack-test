import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";

describe("Books/components/Cards", () => {
  const books = [
    {
      book_title: "Harry Potter and the Cursed Child",
      book_author: ["J. K. Rowling"],
      book_pages: 355,
      book_publication_city: "London",
      book_publication_country: "United Kingdom",
      book_publication_year: 2016,
      id: 1,
    },
  ];

  it("should render without crashing", () => {
    const wrapper = shallow(<Cards books={books} />);
    expect(wrapper).toMatchSnapshot();
  });
});
