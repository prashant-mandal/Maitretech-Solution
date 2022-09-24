import React, { useState, useRef } from "react";
import classes from "./login.module.css";
import Modal from "../UI/Modal";

const Login = (props) => {
  const [error, setError] = useState(false);

  const inputUserNameRef = useRef();
  const inputPasswordRef = useRef();
  const inputCheckRef = useRef();

  const errorMessage = () => {
    setError(false);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    const inputUserName = inputUserNameRef.current.value;
    const inputPassword = inputPasswordRef.current.value;
    const inputCheck = inputCheckRef.current.checked;
    if (inputUserName.trim().length < 4 || inputPassword.trim().length < 6) {
      setError(true);
      return;
    }
    console.log(inputUserName + "\n" + inputPassword);
    localStorage.setItem("username", inputUserName);
    if (inputCheck === true) {
      console.log("login credentials stored successfully");
      props.rememberAndHideModalHandlerPointer();
    }
    props.hideModalHandlerPointer();
  };

  return (
    <Modal>
      <div className={classes["modal-header"]}>
        <h3>Login</h3>
        <button className={classes["modal-close"]}>&times;</button>
      </div>

      <form className={classes["login-form"]} onSubmit={loginHandler}>
        <label htmlFor="user_name">User name</label>
        <input
          onClick={errorMessage}
          className={classes["login-input"]}
          type="text"
          ref={inputUserNameRef}
        />
        <label htmlFor="password">Password</label>
        <input
          onClick={errorMessage}
          className={classes["login-input"]}
          type="password"
          ref={inputPasswordRef}
        />
        <input type="checkbox" id="check" ref={inputCheckRef} />
        <label htmlFor="check" className="mb-3">
          Remember me
        </label>

        {error && (
          <p className={classes["error"]}>Invalid User Name or Password</p>
        )}
        <button className={classes["form-button"]} type="submit">
          Submit
        </button>
      </form>
      <p className={classes["msg"]}>Or if Not Registed</p>
      <button
        className={classes["form-button"]}
        onClick={props.logintoggleHandler}
      >
        Sign Up
      </button>
    </Modal>
  );
};

export default Login;
