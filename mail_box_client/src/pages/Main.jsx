import React from "react";
import Header from "../component/Header";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import ShowAllMail from "../component/ShowAllMail";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../store/store";
import ShowCurrentMail from "../component/ShowCurrentMail";

function Main() {
  const readMode = useSelector((state) => state.ui.readMode);
  const dispatch = useDispatch();
  const handleInbox = () => {
    dispatch(uiSliceActions.hideReadMode());
  };
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
                <a
                  className="nav-link active"
                  href="#home"
                  onClick={handleInbox}
                >
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
                {readMode ? <ShowCurrentMail /> : <ShowAllMail />}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Main;
