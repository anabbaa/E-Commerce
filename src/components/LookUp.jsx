import React from "react";
import Button from "./Button";
import { useProducts } from "../context/CartContext";

const Lookup = () => {
  const { userInput, setUserInput, searchHandle } = useProducts();

  return (
    <form
      onSubmit={searchHandle}
      className="flex flex-col items-center justify-center gap-2 h-[10vh] w-full"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="type"
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none"
        />

        <Button type="submit">Search</Button>
      </div>

    </form>
  );
};

export default Lookup;