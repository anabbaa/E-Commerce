import { useProducts } from "../context/CartContext"
import ProductCard from "./ProductsCard"
import { useParams } from "react-router-dom";

const ViewMore = ({ onAddToCart }) => {
  const { allProducts } = useProducts();
  const { id } = useParams();
const numericId = Number(id);

  return (
    <div className="h-[70vh] w-fill  flex justify-center items-center">
  <div className="w-[50vw]">
  {allProducts
    .filter((product) => product.id === numericId)
    .map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={onAddToCart} 
      />
    ))}
</div>
</div>
  );
};
export default ViewMore