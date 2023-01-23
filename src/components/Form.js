import React, { useState } from "react";
import validator from "validator";

const Form = () => {
  const [condition, setCondition] = useState({ email: "", isValid: undefined });

  const handleChange = (e) => {
    setCondition({ ...condition, email: e.target.value });
  };

  const handleSubmit = (e) => {
    if (validator.isEmail(condition.email)) {
      setCondition({ ...condition, isValid: true });
      alert(`Your email is: ${condition.email}`);
    } else if (condition.email === "" || condition.isValid === undefined) {
      e.preventDefault();
      setCondition({ ...condition, isValid: false });
    }
  };

  return (
    <div className="coming-soon">
      <h1>
        <span>WE'RE</span> <br /> COMING <br /> SOON
      </h1>

      <p className="coming-soon__description">
        Hello fellow shoppers! We're currently building our new <br />
        fashion store. Add your email below to stay up-to-date with <br />
        announcements and our launch deals.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={
            condition.isValid === false
              ? {
                  borderColor: "red",
                }
              : {
                  borderColor: "hsl(0, 36%, 70%)",
                }
          }
        />

        {condition.isValid === false && (
          <img
            src="images/icon-error.svg"
            alt="error-icon"
            className="error-img"
          />
        )}

        <button type="submit">
          <img src="images/icon-arrow.svg" alt="submit-button" />
        </button>
      </form>

      {condition.isValid === false && (
        <p className="error-msg">Please provide a valid email</p>
      )}
    </div>
  );
};

export default Form;
