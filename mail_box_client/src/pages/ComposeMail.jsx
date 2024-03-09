import React, { useState, useRef, useMemo } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";
import { sendMail } from "../actions/crudApis";
import { useSelector } from "react-redux";

const ComposeMail = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const userEmail = useSelector((state) => state.auth.email);

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");

  const handleSend = () => {
    if (to || subject || value) {
      sendMail({ email: to, data: { subject, value }, from: userEmail });
    } else {
      if (!to) alert("Enter recipent email");
      if (!subject) alert("Write subject of your composed mail");
      if (!value) alert("write body of your composed mail");
    }
  };

  return (
    <div>
      <h2>Compose New Mail</h2>
      <Form>
        <Form.Group controlId="formTo">
          <Form.Label>To:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formMailBody">
          <Form.Label>Mail Body:</Form.Label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSend}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ComposeMail;
