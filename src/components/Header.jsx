
import { IoIosCart } from "react-icons/io";
import Cart from "./Cart";
import { useProducts } from "../context/CartContext";
function Header({title , subTitle}) {

  const {setCartView} = useProducts()
  return (
    <header className="flex items-center 
    justify-around w-full bg-blue-500 text-white p-4 h-[10vh]">
  
  {/* Left */}
  <h1 className="text-2xl font-bold">
    {title}
  </h1>

  {/* Center */}
  <h2 className="text-xl font-semibold">
    {subTitle}
  </h2>

  {/* Right */}
  <nav className="flex items-center gap-6">
    <a href="/" className="hover:underline">Home</a>
    <a href="/products" className="hover:underline">Products</a>
    <button onClick={() => setCartView(true)}  >
  <IoIosCart />
</button>
  </nav>

</header>
  );
}

export default Header;