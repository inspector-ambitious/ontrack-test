import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";

const SearchInput = ({ setSearchQuery, searchQuery, setPage }) => {
  const [currentValue, setCurrentValue] = useState(searchQuery);

  return (
    <Row className="mb-4 mt-4">
      <Col lg={4}>
        <Form>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search..."
              onChange={(event) => {
                setCurrentValue(event.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setSearchQuery(currentValue);
                  setPage(1);
                }
              }}
            />
            <Button
              className="ml-2"
              onClick={() => {
                setSearchQuery(currentValue);
                setPage(1);
              }}
            >
              Search
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};

SearchInput.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};

export default SearchInput;
