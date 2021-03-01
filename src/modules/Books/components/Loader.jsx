import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="booksLoaderContainer">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
