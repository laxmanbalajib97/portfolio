import React from "react";
import JumboTron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  return (
    <JumboTron>
      <Container>
        <Row>
          <Col>
            <h2>Laxman Balaji Balasubramanaian</h2>
          </Col>
        </Row>
      </Container>
    </JumboTron>
  );
}

export default Hero;
