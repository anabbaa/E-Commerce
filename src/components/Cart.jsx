import { useProducts } from "../context/CartContext";
import Header from "./Header";
import ProductCard from "./ProductsCard";
import AddDelete from "./AddDelete";
import Bill from "./Bill";
const Cart = () => {
      const { addToCart } = useProducts();

    return (
        <>
        <Header className=""  title="My Ecommerce Store" 
        subTitle= "welcome to My Store" />

  <div className="w-[90vw] h-[70vh] flex flex-wrap justif-evenly flex-row gap-3" >

    {addToCart.map((product) => (
      <div key={product.id}  
       className="flex flex-col w-[30%] h-[70vh] items-center flex justify-evenly"
         >
        <ProductCard product={product} />
        <AddDelete product={product} />
      </div>
    ))}
   

  </div>
    
      <Bill />
          

        </>
    )

}
 export default Cart;