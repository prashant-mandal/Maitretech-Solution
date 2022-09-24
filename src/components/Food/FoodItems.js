import Card from "../UI/Card";
import classes from "./FoodItem.module.css";
import PerItem from "./PerItem";

const Foodlist = [
  {
    name: "Hamburger",
    price: "200",
    image: "burger.jpeg",
  },
  {
    name: "Fries",
    price: "100",
    image: "fries.jpeg",
  },
  {
    name: "Coke",
    price: "50",
    image: "coke.jpeg",
  },
  {
    name: "Pepsi",
    price: "50",
    image: "pepsi.jpeg",
  },
];

const FoodItems = () => {
  const foodlist = Foodlist.map((food) => (
    <PerItem
      key={food.name}
      name={food.name}
      image={food.image}
      price={food.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{foodlist}</ul>
      </Card>
    </section>
  );
};

export default FoodItems;
