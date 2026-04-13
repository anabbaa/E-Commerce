import Ract from "react"


function Header({title , subTitle}) {
  return (
    <header className=" flex items-center justify-around w-screen bg-blue-500 text-white
     p-4  h-[10vh]">
      <h1 className="text-2x4 font-bold">{title}</h1>
      <h2  className="text-2x2 font-bold">   {subTitle}  </h2>
      <nav >
        <a href="/" className="text-red mr-4 hover:underline">Home</a>
        <a href="/products" className="text-white hover:underline">Products</a>
      </nav>
    </header>
  );
}

export default Header;