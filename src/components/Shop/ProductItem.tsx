import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props: { id: string; title: string; price: number; description: string }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>€{props.price}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Adicionar</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
