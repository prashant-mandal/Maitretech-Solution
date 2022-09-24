import Modal from "../UI/Modal";
import React, { useState, useRef } from "react";
import classes from "./Signup.module.css";

const Signup = (props) => {
  const [error, setError] = useState(false);
  const inputUserNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const errorMessage = () => {
    setError(false);
  };

  const signuphandler = (event) => {
    event.preventDefault();
    const inputUserName = inputUserNameRef.current.value;
    const inputPassword = inputPasswordRef.current.value;
    const inputEmail = inputEmailRef.current.value;
    if (inputUserName.trim().length < 5 || inputPassword.trim().length < 6) {
      setError(true);
      return;
    }
    if (inputEmail.trim().length < 5) {
      setError(true);
      return;
    }
    console.log(inputUserName + "\n" + inputEmail + "\n" + inputPassword);
    alert("Registered");
    props.signuptoggleHandler();
  };

  return (
    <Modal>
      <div className={classes["modal-header"]}>
        <h3>Sign up</h3>
        <button
          className={classes["modal-close"]}
          onClick={props.signuptoggleHandler}
        >
          &times;
        </button>
      </div>

      <form className={classes["login-form"]} onSubmit={signuphandler}>
        <label htmlFor="full_name">Full Name</label>
        <input
          className={classes["login-input"]}
          onClick={errorMessage}
          ref={inputUserNameRef}
          type="text"
        />
        <label htmlFor="user_name">Email</label>
        <input
          className={classes["login-input"]}
          onClick={errorMessage}
          ref={inputEmailRef}
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className={classes["login-input"]}
          onClick={errorMessage}
          ref={inputPasswordRef}
          type="password"
        />

        {error && (
          <p className={classes["error"]}>Invalid Name,Email or Password</p>
        )}
        <button className={classes["form-button"]} type="submit">
          Register
        </button>
      </form>
    </Modal>
  );
};

export default Signup;
