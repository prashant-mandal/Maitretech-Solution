import classes from "./Header.module.css";
import NavigationItem from "./NavigationItem";

const Header = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Food's Restaurant</h1>
      <NavigationItem
        showModalHandlerPointer={props.showModalHandlerPointer}
        isloggedin={props.Auth}
      />
    </header>
  );
};

export default Header;
