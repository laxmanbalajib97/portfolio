import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Laxman Balaji Balasubramanian",
      hyperLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Esto Curiosus, Interrogato Omnia",
        //subTitle: '',
        text: "Projects I have worked on!",
      },
      about: {
        title: "A little about me",
      },
      contact: {
        title: "Would love to talk to you",
      },
    };
  }
  render() {
    return (
      <div>
        <Router>
          {" "}
          <Container fluid={true} className="p-0">
            <Navbar expand="lg" bg="dark" variant="dark">
              <Navbar.Brand>Balasubramanian, Laxman Balaji</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                {/*ml-auto = margin left auto class*/}
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={() => (
                <AboutPage
                  title={this.state.home.title}
                  subtitle="this.state.home.subtitle"
                  text="this.state.home.text"
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={() => (
                <ContactPage
                  title={this.state.home.title}
                  subtitle="this.state.home.subtitle"
                  text="this.state.home.text"
                />
              )}
            />
            <Footer />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
