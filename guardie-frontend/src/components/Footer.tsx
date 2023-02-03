import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white">
        <Container>
          <Row>
            <Col className="text-center py-3">
              Questo sito è uno spazio legato alla Community fantasy medievale
              di{" "}
              <a href="https://www.extremelot.eu/" target="_blank">
                &copy; Extremelot
              </a>
              . Per informazioni contattare <strong>Jaer</strong> all'interno
              del Gioco.
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
