import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

const PaginationToolbar = ({ page, setPage, maxPage }) => {
  return (
    <Pagination>
      <Pagination.First disabled={page === 1} onClick={() => setPage(1)} />
      <Pagination.Prev disabled={page < 2} onClick={() => setPage(page - 1)} />
      <Pagination.Item active>
        Page: {page}/{maxPage}
      </Pagination.Item>
      <Pagination.Next
        disabled={page >= maxPage}
        onClick={() => setPage(page + 1)}
      />
      <Pagination.Last
        disabled={page === maxPage}
        onClick={() => setPage(maxPage)}
      />
    </Pagination>
  );
};

PaginationToolbar.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  maxPage: PropTypes.number.isRequired,
};

export default PaginationToolbar;
