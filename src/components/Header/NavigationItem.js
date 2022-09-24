import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <nav className={classes["nav-main"]}>
      <ul>
        {!props.isloggedin && (
          <li>
            <p onClick={props.homeText}>Sign up</p>
          </li>
        )}
        {!props.isloggedin && (
          <li>
            <p onClick={props.aboutText}>Login</p>
          </li>
        )}

        {props.isloggedin && (
          <li>
            <p onClick={props.showModalHandlerPointer}>logout</p>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationItem;
