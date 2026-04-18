import { useProducts } from "../context/CartContext"
const  Bill  = ()=> {
    const  {addToCart} = useProducts()

    const result = addToCart.reduce((acc, cur) => {
  return acc + cur.price * cur.quantity;
}, 0);

console.log(result)


    return (
     <div className="flex items-center justify-center w-full">
  <b>Total Bill</b>
  <b>{result}</b>
</div>
    )

}
export  default Bill