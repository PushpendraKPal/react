import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getMails, updateMail } from "../actions/crudApis";
import { useDispatch, useSelector } from "react-redux";
import { emailSliceActions, uiSliceActions } from "../store/store";

function ShowAllMail() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
  const rMails = useSelector((state) => state.email.recieved);

  const handleViewEmail = (e) => {
    console.log("View mail");
    dispatch(emailSliceActions.setCurrentEmail(e.id));
    dispatch(emailSliceActions.setCurrentStack("inbox"));
    dispatch(uiSliceActions.showReadMode());
    updateMail(userEmail, e);
  };

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
      {console.log(rMails)}
      <div>
        <Row>
          <Col sm={4}>Seder's E-mail</Col>
          <Col sm={8}>Email-Subject</Col>
        </Row>
      </div>
      <div>
        {rMails.map((e) => {
          return (
            <Row onClick={() => handleViewEmail(e)} key={e.id}>
              <Col sm={4}>
                <span className={e.id === false ? "dot" : ""}></span>
                {e.from}
              </Col>
              <Col sm={8}>{e.subject}</Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
}

export default ShowAllMail;
