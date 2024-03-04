import { useState } from "react";

const Welcome = () => {
  const [pre, setPre] = useState(false);
  return (
    <div>
      <h1>Welcome</h1>
      <p>Hi there!</p>

      <p>Welcome to the ExpenseTracker family 😊.</p>

      <p>
        Keep watching your inbox for exclusive members-only events, and
        discounts.
      </p>

      <p>Thanks again.</p>

      <div>
        <p>Get premium access with 50% discount.</p>
        <button onClick={() => setPre(true)}>Join Now !</button>
        {pre && <p>Thanks for joining Premium</p>}
      </div>
    </div>
  );
};

export default Welcome;
