import Card from '../UI/Card';
import classes from './ProductItem.module.css';

type ProductItemProps = {
  title: string;
  price: number;
  description: string;
};

const ProductItem = (props:ProductItemProps) => {
  const { title, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
