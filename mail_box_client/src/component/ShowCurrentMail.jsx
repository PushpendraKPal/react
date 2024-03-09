import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ShowCurrentMail() {
  let show = false;
  console.log("Called ShowCurrent");
  const stack = useSelector((state) => state.email.currentStack);
  const emailId = useSelector((state) => state.email.currentEmail);
  let receivedEmails = useSelector((state) => state.email.recieved);
  let sentEmails = useSelector((state) => state.email.sent);

  const getEmail = (emailId) => {
    let email = { from: "hello", subject: "hello", value: "hello" };
    let getmail;

    if (stack === "inbox") {
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

  useEffect(() => {
    let p = document.getElementById("hi");
    p.innerHTML = reqEmail.value;
  }, []);

  return (
    <>
      <div>
        <p className="sc_subject">
          Subject: <span className="sub">{reqEmail.subject}</span>
        </p>
        <p id="hi" className="sc_body"></p>
      </div>
    </>
  );
}

export default ShowCurrentMail;
