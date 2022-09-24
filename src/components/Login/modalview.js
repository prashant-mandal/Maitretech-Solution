import React, { Fragment, useState } from "react";
import Login from "./login";
import Signup from "./Signup";

const Modalview = (props) => {
  const [loginmodal, setloginmodal] = useState(true);
  const logintoggleHandler = () => {
    setloginmodal(false);
  };
  const signuptoggleHandler = () => {
    setloginmodal(true);
  };
  return (
    <Fragment>
      {loginmodal && (
        <Login
          hideModalHandlerPointer={props.hideModalHandlerPointer}
          rememberAndHideModalHandlerPointer={
            props.rememberAndHideModalHandlerPointer
          }
          logintoggleHandler={logintoggleHandler}
        />
      )}
      {!loginmodal && <Signup signuptoggleHandler={signuptoggleHandler} />}
    </Fragment>
  );
};

export default Modalview;
