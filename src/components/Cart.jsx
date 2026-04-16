import { useProducts } from "../context/CartContext";
import Header from "./Header";
import ProductCard from "./ProductsCard";
import {card} from "../styles/globals"
import AddDelete from "./AddDelete";
const Cart = () => {
      const { addToCart } = useProducts();



    return (
        <>
        <Header className=""  title="My Ecommerce Store" 
        subTitle= "welcome to My Store" />

<div className="flex flex-col gap-6 w-full">

  <div className={`${card.cardsWrapper} flex flex-wrap gap-4 w-[90vw]`}>

    {addToCart.map((product) => (
      <div key={product.id} className="flex flex-col items-center gap-2">

      
        <ProductCard product={product} />

      
        <AddDelete product={product} />
      </div>
    ))}

  </div>

</div>
        </>
    )

}
 export default Cart;