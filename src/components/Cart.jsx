import { useProducts } from "../context/CartContext";
import Header from "./Header";
import ProductCard from "./ProductsCard";
import AddDelete from "./AddDelete";
import Bill from "./Bill";
import Layout from "./LayOut";
const Cart = ({onAddToCart}) => {
      const { addToCart  } = useProducts();
      
    return (
        <>
        <div className="flex justify-center items-center h-screen">
  <div className="h-[80%] flex flex-wrap justify-center gap-6">
    {addToCart.map((product) => (
      <div 
      key={product.id}
      className="flex flex-col w-[30%] h-[70vh] items-center justify-center gap-6"
>
      <ProductCard onAddToCart={onAddToCart} product={product} />
      <AddDelete product={product} />
</div>
    ))}

    <Bill />
  </div>
</div>
        </>
    )

}
 export default Cart;