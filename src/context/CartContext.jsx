import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // use state to handel select category 
   const [searchItem , setSearchItem ] = useState("");
  const [selectCategory , setSelectCategory ] = useState("");
  // use state to handel search
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [userInput, setUserInput] = useState("");
  // use state to cart in header
  const [cartView , setCartView ] = useState(false);
  //
  const [addToCart , setAddToCart] = useState([])

  // fn to add to cart 
  const handelAddToCart = (product) => {
  console.log("clicked", product);
  setAddToCart((prevState) => [...prevState, product]);
};
// category fn
  const category = products.filter((item) =>
    
    item.category.toLowerCase() === selectCategory.toLowerCase()
  );

  const searchHandle = (e) => {
    e.preventDefault();

    const userText = userInput.toLowerCase().trim();

    if (!userText) {
      setFilteredProducts([]);
      return;
    }

    const result = products.filter((product) =>
      product.name.toLowerCase().includes(userText)
    );

    setFilteredProducts(result);
  };

  console.log(addToCart)

  const contextObject = {
    products,
    filteredProducts,
    searchHandle,
    userInput,
    setUserInput,
    searchItem,
    setSearchItem,
    setSelectCategory,
    category,
    cartView,
    setCartView,
    handelAddToCart,
    addToCart
  };

  return (
    <CartContext.Provider value={contextObject}>
      {children}
    </CartContext.Provider>
  );
};

export const useProducts = () => {
  const results = useContext(CartContext);
  return results;
}