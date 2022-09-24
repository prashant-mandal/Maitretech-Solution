import classes from "./Home.module.css";
import React, { Fragment, useState } from "react";
import Food from "../Food/Food";

const Home = (props) => {
  const [gotomenu, setGotomenu] = useState(true);
  const gotoHandler = () => {
    setGotomenu(false);
  };

  return (
    <Fragment>
      {gotomenu && (
        <div className={classes["verticle-middle"]}>
          <h1>Welcome To Food's Kitchen</h1>

          <button className={classes["btn"]} onClick={gotoHandler}>
            GO TO MENU
          </button>
        </div>
      )}
      {!gotomenu && <Food />}
    </Fragment>
  );
};

export default Home;
