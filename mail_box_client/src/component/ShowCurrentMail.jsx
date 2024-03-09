import React from "react";
import { useSelector } from "react-redux";

function ShowCurrentMail() {
  let show = false;
  console.log("Called ShowCurrent");
  const stack = useSelector((state) => state.email.currentStack);
  const emailId = useSelector((state) => state.email.currentEmail);
  const receivedEmails = useSelector((state) => state.email.recieved);
  const sentEmails = useSelector((state) => state.email.sent);

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

  return (
    <>
      <div>
        <p>{reqEmail.subject}</p>
        <p id="hi">{reqEmail.value}</p>
      </div>
    </>
  );
}

export default ShowCurrentMail;
