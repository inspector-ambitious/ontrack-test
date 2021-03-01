import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { Container } from "react-bootstrap";
import PaginationToolbar from "./components/PaginationToolbar";
import Cards from "./components/Cards";
import UnexpectedError from "./components/UnexpectedError";
import Loader from "./components/Loader";
import SearchInput from "./components/SearchInput";

const DEFAULT_PAGE = 1;
const DEFAULT_ITEMS_PER_PAGE = 20;
const DEFAULT_QUERY = "";

const Books = () => {
  const history = useHistory();
  const location = useLocation();
  const initSearch = queryString.parse(location.search);
  const initSearchQuery = initSearch.query || DEFAULT_QUERY;
  const initPage = parseInt(initSearch.page) || DEFAULT_PAGE;

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(initPage);
  const [maxPage, setMaxPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(initSearchQuery);
  const [fetchError, setFetchError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    history.push(`?page=${page}&query=${searchQuery}`);
    setLoading(true);
    const fetchBooks = async () => {
      try {
        let params = { page };
        if (searchQuery) {
          params = {
            ...params,
            filters: [{ type: "all", values: [searchQuery] }],
          };
        }
        const resp = await fetch("http://nyx.vima.ekt.gr:3000/api/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });
        const json = await resp.json();
        setData(json);
        setMaxPage(Math.ceil(json.count / DEFAULT_ITEMS_PER_PAGE));
      } catch (e) {
        setFetchError(true);
      }
      setLoading(false);
    };
    fetchBooks();
  }, [page, searchQuery, history]);

  if (fetchError) {
    return <UnexpectedError />;
  }

  return (
    <>
      {loading && <Loader />}
      {data && (
        <Container>
          <h1 className="mt-4">Books</h1>
          <SearchInput
            setQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setPage={setPage}
          />
          <PaginationToolbar page={page} setPage={setPage} maxPage={maxPage} />
          <Cards {...data} />
          <PaginationToolbar page={page} setPage={setPage} maxPage={maxPage} />
        </Container>
      )}
    </>
  );
};

export default Books;
