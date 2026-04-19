
import ProductCard from "./ProductsCard";
import { card } from "../styles/globals";
import { useProducts } from "../context/CartContext";



  const Category = () => {
  const { category, handelAddToCart } = useProducts();

  return (
    <div className={card.cardsWrapper}>
      {category.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handelAddToCart}
        />
      ))}
    </div>
  );
};

export default Category;