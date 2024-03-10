// Helping functions ----------------------------------------------------------------------------

function objectToArrayWithIds(obj) {
  return Object.keys(obj).map((key) => ({ ...obj[key], id: key }));
}

function removeDot(email) {
  return email.replace(/\./g, "");
}

const url = "https://mailboxclient-45cc0-default-rtdb.firebaseio.com/";

// send email -------------------------------------------------------------------------------------

export const sendMail = async (payload) => {
  const { email, data, from } = payload;
  const mail = removeDot(email);
  const fromEmail = removeDot(from);
  console.log("Sending getMails.....");
  try {
    const response = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${mail}/recieved.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, from: from, read: false }),
      }
    );

    const resData = await response.json();
    if (resData.error) throw new Error(resData.error);
    console.log(resData);

    const senderResponse = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${fromEmail}/sent.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, to: email, read: false }),
      }
    );

    const senderData = await senderResponse.json();
    if (senderData.error) throw new Error(senderData.error);
    return await getMails(fromEmail);
  } catch (error) {
    console.log(error);
  }
};

// get emails -------------------------------------------------------------------------------

export const getMails = async (email) => {
  const mail = removeDot(email);

  try {
    const response = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${mail}.json`,
      {
        method: "GET",
      }
    );

    const resData = await response.json();
    if (resData.error) throw new Error(resData.error);
    console.log(resData, "RECIEVED MAILS");

    const recieved = objectToArrayWithIds(resData.recieved).reverse();
    const sent = objectToArrayWithIds(resData.sent).reverse();

    return { recieved, sent };
  } catch (error) {
    console.log(error);
  }
};

// Update  Received Email-----------------------------------------------------------------------------

export const updateMail = async (userEmail, e, stack) => {
  const mail = removeDot(userEmail);

  try {
    const response = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${mail}/${stack}/${e.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({ ...e, read: true }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resData = await response.json();
    if (resData.error) throw new Error(resData.error);
    return await getMails(mail);
  } catch (error) {
    console.log(error);
  }
};

// Delete Recieved Email

export const deleteteMail = async (userEmail, e, stack) => {
  const mail = removeDot(userEmail);

  try {
    const response = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${mail}/${stack}/${e.id}.json`,
      {
        method: "DELETE",
      }
    );

    const resData = await response.json();
    if (resData.error) throw new Error(resData.error);
    return await getMails(mail);
  } catch (error) {
    console.log(error);
  }
};
