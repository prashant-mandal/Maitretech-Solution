import Header from "./components/Header/Header";
//import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import Home from "./components/Home/Home";
import Modalview from "./components/Login/modalview";

function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const storeUserloginInfo = localStorage.getItem("isLoggedIn");

    if (storeUserloginInfo === "true") {
      setIsloggedIn(true);
    } else {
      localStorage.removeItem("username");
    }
  }, []);

  const showModalHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsloggedIn(false);
  };

  const hideModalHandler = () => {
    setIsloggedIn(true);
  };
  const rememberAndHideModalHandler = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsloggedIn(true);
  };

  return (
    <Fragment>
      <Header showModalHandlerPointer={showModalHandler} Auth={isloggedIn} />
      <main>
        {isloggedIn && <Home />}

        {!isloggedIn && (
          <Modalview
            hideModalHandlerPointer={hideModalHandler}
            rememberAndHideModalHandlerPointer={rememberAndHideModalHandler}
          />
        )}
      </main>
    </Fragment>
  );
}

export default App;
