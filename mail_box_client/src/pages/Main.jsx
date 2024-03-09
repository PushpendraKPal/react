import React from "react";
import Header from "../component/Header";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import ShowAllMail from "../component/ShowAllMail";

function Main() {
  return (
    <div>
      <Header />
      <div>
        <Container fluid>
          <Row>
            {/* Vertical Navbar */}
            <Col
              sm={3}
              style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
            >
              <Button className="btn_compose">COMPOSE MAIL</Button>
              <nav className="nav flex-column">
                <a className="nav-link active" href="#home">
                  Inbox
                </a>
                <a className="nav-link" href="#about">
                  Sent
                </a>
                <a className="nav-link" href="#contact">
                  Unread
                </a>
                <a className="nav-link" href="#contact">
                  Read
                </a>
              </nav>
            </Col>

            {/* Blog Editor */}
            <Col sm={9}>
              <Container className="mt-4">
                <ShowAllMail />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Main;
