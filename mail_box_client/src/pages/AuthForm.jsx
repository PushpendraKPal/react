import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Login

    if (isLogin) {
    }

    // signup
    else {
      if (password === cnfPassword) {
        //console.log("Signup");
        try {
          let response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDsKmRy9uKIl5cyHAFUJc5PCGyPCMqTvo",
            {
              method: "POST",
              body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
              }),
            }
          );
          let data = await response.json();
          if (data.error) return alert(data.error.message);
          else {
            console.log("User have Successfully SignedUp");
          }
        } catch (err) {
          //console.log(err, "Hello");
        }
      } else {
        return alert("Password does not matches");
      }
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">
                {isLogin ? "Log In" : "Sign Up"}
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {!isLogin && (
                  <Form.Group controlId="formBasicCnfPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={cnfPassword}
                      onChange={(e) => setCnfPassword(e.target.value)}
                    />
                  </Form.Group>
                )}
                <Button className="mt-3" variant="primary" type="submit" block>
                  {isLogin ? "Log In" : "Sign Up"}
                </Button>
              </Form>
              <p className="text-center mt-3">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Sign Up" : "Log In"}
                </Button>
              </p>
              {isLogin && <p className="text-center">Forget Password?</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthForm;
