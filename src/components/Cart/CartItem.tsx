import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props: { id: string; title: string; quantity: number; total: number; price: number }) => {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(cartActions.addToCart({ id: props.id, title: props.title, price: props.price }));
  };

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          €{props.total} <span className={classes.itemprice}> (€{props.price} /un)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
