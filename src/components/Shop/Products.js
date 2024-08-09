import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Laptop",
    price: 6,
    description: "I am enjoying my first laptop.",
  },
  {
    id: "p2",
    title: "My Second Laptop",
    price: 8,
    description: "I am enjoying my second laptop.",
  },
  {
    id: "p3",
    title: "My Third Laptop",
    price: 3,
    description: "I am enjoying my third laptop.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
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
