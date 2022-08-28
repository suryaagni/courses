import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import moment from "moment";
const DisplayCard = ({x}) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title className="pt-2 pb-2">{x.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Author: {x.author}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 pt-2 pb-2 text-muted">
          Rating: {x.rating}/5
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 pt-2 pb-2">
          Start: {moment.unix(x.startDate).format("MM/DD/YYYY")}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 pt-2 pb-2 ">
          End: {moment.unix(x.endDate).format("MM/DD/YYYY")}
        </Card.Subtitle>
        <Card.Text className="mt-2 mb-3 pt-2 pb-2">{x.description}</Card.Text>

        <Link to={`/${x.id}/details`}>
          <Button variant="primary">Start Course</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

DisplayCard.propTypes = {
    x: PropTypes.object
}
export default DisplayCard;
