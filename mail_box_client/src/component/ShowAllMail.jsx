import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getMails } from "../actions/crudApis";
import { useDispatch, useSelector } from "react-redux";
import { emailSliceActions } from "../store/store";

function ShowAllMail() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
  const rMails = useSelector((state) => state.email.recieved);

  useEffect(() => {
    const getData = async (userEmail) => {
      console.log("Effect-ShowAll");
      const data = await getMails(userEmail);
      dispatch(emailSliceActions.getMails(data));
    };
    getData(userEmail);
  }, []);
  return (
    <div>
      <div>Show all mails</div>
      <div>
        <Row>
          <Col sm={4}>Seder's E-mail</Col>
          <Col sm={8}>Email-Subject</Col>
        </Row>
      </div>
      <div>
        {rMails.map((e) => {
          return (
            <Row>
              <Col sm={4}>{e.from}</Col>
              <Col sm={8}>{e.subject}</Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
}

export default ShowAllMail;
