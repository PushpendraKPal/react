// send email

const url = "https://mailboxclient-45cc0-default-rtdb.firebaseio.com/";

function removeDot(email) {
  return email.replace(/\./g, "");
}

export const sendMail = async (payload) => {
  const { email, data, from } = payload;
  const mail = removeDot(email);
  console.log("Sending getMails.....");
  try {
    const response = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${mail}/recieved.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const resData = await response.json();
    if (resData.error) throw new Error(resData.error);
    console.log(resData);

    const senderResponse = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${from}/send.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const senderData = await response.json();
    if (senderData.error) throw new Error(senderData.error);
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
};

// get emails

export const getMails = async (payload) => {
  const { email } = payload;

  try {
    const response = await fetch(
      `https://mailboxclient-45cc0-default-rtdb.firebaseio.com/${email}.json`,
      {
        method: "GET",
      }
    );

    const resData = await response.json();
    if (resData.error) throw new Error(resData.error);
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
};
