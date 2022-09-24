import classes from "./PerItem.module.css";
import Addfood from "./AddFood";

const PerItem = (props) => {
  const path = "../../assets/" + props.image;

  return (
    <li className={classes.food}>
      <div>
        <h3>{props.name}</h3>
        <div>
          <img src={path} alt={props.image} width="50%" height="50%" />
        </div>
        <div className={classes.price}>Rs. {props.price}</div>
      </div>
      <div>
        <Addfood />
      </div>
    </li>
  );
};

export default PerItem;
