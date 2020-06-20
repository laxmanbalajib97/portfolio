import React from "react";
import JumboTron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <JumboTron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>
            {props.title && <h2>{props.title}</h2>}
            {props.text && <h3>{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </JumboTron>
  );
}

export default Hero;
