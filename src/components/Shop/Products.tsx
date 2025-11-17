import React from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  { id: "p1", title: "Livro", price: 12, description: "Um ótimo livro para leitura." },
  { id: "p2", title: "Caneta", price: 3, description: "Caneta azul de escrita macia." },
  { id: "p3", title: "Caderno", price: 8, description: "Caderno com 100 folhas." },
];

const Products: React.FC = () => {
  return (
    <section className={classes.products}>
      <h2>Produtos</h2>
      <ul>
        {PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
