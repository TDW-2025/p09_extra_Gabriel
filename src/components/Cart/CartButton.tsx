import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import type { RootState } from "../../Store";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
