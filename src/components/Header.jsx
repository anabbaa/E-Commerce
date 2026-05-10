import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header({ title, subTitle }) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-around w-screen bg-blue-500 text-white p-4 h-[10vh]">
      
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <h2 className="text-xl font-semibold">
        {subTitle}
      </h2>

      <nav className="flex items-center gap-6">
        <a href="/" className="hover:underline" >Home</a>

        

        <button onClick={() => navigate("/cart")} className="h-[6vh]">
          <IoIosCart size={33} />
        </button>
          
          
      </nav>
    </header>
  );
}

export default Header;