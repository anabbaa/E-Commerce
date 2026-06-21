import {useEffect} from "react"
import { useProducts } from "../context/CartContext";
const Notify = ({ addToCart }) => {
  const { lastAdded , setLastAdded} = useProducts()


  const totalQuantity = addToCart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (addToCart.length === 0) return;

    // get the last item in cart
    const last = addToCart[addToCart.length - 1];
    setLastAdded(last.name);

    const timer = setTimeout(() => {
      setLastAdded(null);  
    }, 2000);

    return () => clearTimeout(timer);

  }, [totalQuantity]);



  return (
  
    <div className="notify">
      {lastAdded && <p>{lastAdded} added to cart!</p>}
    </div>
  
  );
};

export default Notify;