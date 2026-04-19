import { useProducts } from  "../context/CartContext"
import ProductCard from "./ProductsCard";
import { card } from "../styles/globals";

const SearchProducts = () => {
  const { filteredProducts, handelAddToCart } = useProducts();

  return (
    <div className={card.cardsWrapper}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handelAddToCart}
        />
      ))}
    </div>
  );
};
export default SearchProducts;