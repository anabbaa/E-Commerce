import { useProducts } from "../context/CartContext"
const  Bill  = ()=> {
    const  {addToCart} = useProducts()

    const result = addToCart.reduce((acc, cur) => {
  return acc + cur.price * cur.quantity;
}, 0);

    return (
     <div className="w-[100vw] flex justify-center items-center ">
     <div className="flex items-center justify-center w-[25%] bg-blue-300 h-[12vh]">
  <b>Total Bill</b>
  <b>{result}</b>
</div>
</div>
    )

}
export  default Bill