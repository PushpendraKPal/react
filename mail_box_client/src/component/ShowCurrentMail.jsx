import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ShowCurrentMail() {
  let show = false;
  const stack = useSelector((state) => state.email.currentStack);
  const emailId = useSelector((state) => state.email.currentEmail);
  let receivedEmails = useSelector((state) => state.email.recieved);
  let sentEmails = useSelector((state) => state.email.sent);
  console.log("Stack", stack);

  const getEmail = (emailId) => {
    let email = { from: "hello", subject: "hello", value: "hello" };
    let getmail;

    if (stack === "recieved") {
      getmail = receivedEmails.find((e) => {
        return e.id === emailId;
      });
    } else {
      getmail = sentEmails.find((e) => {
        return e.id === emailId;
      });
    }
    show = true;
    if (!show) return email;
    return getmail;
  };

  let reqEmail = getEmail(emailId);

  const handleDelete = () => {};

  useEffect(() => {
    let p = document.getElementById("hi");
    p.innerHTML = reqEmail.value;
  }, []);

  return (
    <>
      <div>
        <div className="sam_del sc_subject">
          <p>
            Subject: <span className="sub">{reqEmail.subject}</span>
          </p>
          <Button className="del_btn" onClick={handleDelete}>
            Delete
          </Button>
        </div>
        <p id="hi" className="sc_body"></p>
      </div>
    </>
  );
}

export default ShowCurrentMail;
