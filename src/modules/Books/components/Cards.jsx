import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Cards = ({ books }) => {
  return (
    <Row className="mt-4">
      {books.map(
        ({
          book_title,
          book_author,
          book_pages,
          book_publication_city,
          book_publication_country,
          book_publication_year,
          id,
        }) => (
          <Col
            key={id}
            xs={12}
            md={6}
            lg={3}
            className="d-flex align-items-stretch mb-4"
          >
            <Card className="flex-fill">
              <Card.Body>
                <Card.Title>{book_title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Author: {book_author.map((bookAuthor, index) => bookAuthor)}
                </ListGroupItem>
                <ListGroupItem>Pages: {book_pages}</ListGroupItem>
                <ListGroupItem>
                  Publication City: {book_publication_city}
                </ListGroupItem>
                <ListGroupItem>
                  Publication Country: {book_publication_country}
                </ListGroupItem>
                <ListGroupItem>
                  Publication Year: {book_publication_year}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        )
      )}
    </Row>
  );
};

Cards.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      book_title: PropTypes.string.isRequired,
      book_author: PropTypes.arrayOf(PropTypes.string).isRequired,
      book_pages: PropTypes.number.isRequired,
      book_publication_city: PropTypes.string.isRequired,
      book_publication_country: PropTypes.string.isRequired,
      book_publication_year: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Cards;
