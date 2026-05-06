import { useProducts } from "../context/CartContext";
import Header from "./Header";
import ProductCard from "./ProductsCard";
import AddDelete from "./AddDelete";
import Bill from "./Bill";
import Layout from "./LayOut";
const Cart = ({onAddToCart}) => {
      const { addToCart  } = useProducts();
      console.log(addToCart)

    return (
        <>
  <div className="w-[90vw] h-screen flex flex-wrap justif-evenly flex-row gap-3" >

    {addToCart.map((product) => (
      <div key={product.id}  
       className="flex flex-col w-[30%] h-[70vh] items-center flex justify-evenly"
         >
        <ProductCard onAddToCart={onAddToCart}    product={product} />
        <AddDelete  product={product} />
      </div>
    ))}
   

  </div>
      <Bill />
        </>
    )

}
 export default Cart;