import { createContext, useContext, useState } from "react";
import { products } from "../data/products";
import { FaHandshakeSimple } from "react-icons/fa6";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // use state for main all products
  const  [allProducts , setAllProducrts] = useState(products);
  // use state to handel select category 
   const [searchItem , setSearchItem ] = useState("");
  const [selectCategory , setSelectCategory ] = useState("");
  // use state to handel search
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [userInput, setUserInput] = useState("");
  // use state to cart in header
  //update cart
  const [addToCart , setAddToCart] = useState([])

  // fn to add to cart 
  const handelAddToCart = (product) => {
  if ((product.stock ?? 0) <= 0) return;

  setAddToCart((prevState) => {
    const exist = prevState.find((item) => item.id === product.id);

    if (exist) {
      return prevState.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              stock: (item.stock ?? 0) - 1
            }
          : item
      );
    } else {
      return [
        ...prevState,
        {
          ...product,
          quantity: 1,
          stock: (product.stock ?? 0) - 1
        }
      ];
    }

  });
  setAllProducrts((prevstate) => {
  return prevstate.map((item) =>
    item.id === product.id
      ? { ...item, stock: item.stock - 1 }
      : item
  );
});
};

// fn to add and decrease and dlete from cart 
  const handleIncrease = (product) => {
  setAddToCart((prev) =>
    prev.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const handleDecrease = (product) => {
  setAddToCart((prev) =>
    prev
      .map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

// category fn
  const category = products.filter((item) =>
    
    item.category.toLowerCase() === selectCategory.toLowerCase()
  );

  // fn for  search

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


  setUserInput("");
};

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
    handelAddToCart,
    addToCart,
    handleDecrease,
    handleIncrease,
    allProducts
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