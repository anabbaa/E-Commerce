function Header({title , subTitle}) {
  return (
    <header className="bg-blue-500 text-white p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2  className="text-2xl font-bold">   {subTitle}  </h2>
      <nav>
        <a href="/" className="text-white mr-4 hover:underline">Home</a>
        <a href="/products" className="text-white hover:underline">Products</a>
      </nav>
    </header>
  );
}

export default Header;