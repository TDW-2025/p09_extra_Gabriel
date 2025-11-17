import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <ul>
          {items.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              total={item.total}
              quantity={item.quantity}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
