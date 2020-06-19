import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-0">
          <Col className="p-0" md={5} sm={12}>
            {" "}
            Balasubramanian, Laxman Balaji
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={5} sm={12}>
            {" "}
            Site was developed by Laxman Balaji B.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
