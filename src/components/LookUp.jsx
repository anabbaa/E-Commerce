import React from "react";
import Button from "./Button";
import { useProducts } from "../context/CartContext";

const Lookup = () => {
  const { userInput, setUserInput, searchHandle } = useProducts();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
  
<form
  onSubmit={searchHandle}
  className="flex items-center justify-center gap-2 h-[10vh] w-full"
>
  <input
    type="text"
    value={userInput}
    onChange={handleChange}
    placeholder="type"
    className="border border-gray-300 rounded px-3 py-1 focus:outline-none"
  />

  <Button type="submit">Search</Button>
</form>
  );
};

export default Lookup;