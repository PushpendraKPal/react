import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { getMails, updateMail } from "../actions/crudApis";
import { useDispatch, useSelector } from "react-redux";
import { emailSliceActions, uiSliceActions } from "../store/store";

function ShowAllMail() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.email);
  const rMails = useSelector((state) => state.email.recieved);
  const stack = useSelector((state) => state.email.currentStack);

  const handleViewEmail = (e) => {
    console.log("View mail");
    dispatch(emailSliceActions.setCurrentEmail(e.id));
    dispatch(uiSliceActions.showReadMode());
    updateMail(userEmail, e, stack);
  };

  useEffect(() => {
    const getData = async (userEmail) => {
      console.log("Effect-ShowAll");
      let data = await getMails(userEmail);
      if (!data) data = [];
      dispatch(emailSliceActions.getMails(data));
    };
    getData(userEmail);
  }, []);
  return (
    <div>
      <div className="sam_heading">Inbox</div>
      {console.log(rMails)}
      <div>
        <Row>
          <Col sm={4} className="sam_hcol">
            From
          </Col>
          <Col sm={8} className="sam_hcol">
            Subject
          </Col>
        </Row>
      </div>
      <div>
        {rMails &&
          rMails.map((e) => {
            return (
              <Row
                onClick={() => handleViewEmail(e)}
                key={e.id}
                className="show_email"
              >
                <Col sm={4} className="sam_col sam_row">
                  <div className={e.read === false ? "dot" : ""}></div>
                  <div>{e.from}</div>
                </Col>
                <Col sm={8} className="sam_col sam_del">
                  <div>{e.subject}</div>
                  <div>
                    <Button className="del_btn">Delete</Button>
                  </div>
                </Col>
              </Row>
            );
          })}
      </div>
    </div>
  );
}

export default ShowAllMail;
