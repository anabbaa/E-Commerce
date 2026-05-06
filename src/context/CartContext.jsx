import { createContext, useContext, useState} from "react";
import { FaHandshakeSimple } from "react-icons/fa6";
import {products} from "../data/products"
import { HiServerStack } from "react-icons/hi2";
import { FiTruck } from "react-icons/fi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // get products use state
  const [allProducts, setAllProducts] = useState(products);
  // use state to handel select category 
   const [searchCategory , setSearchCategory ] = useState("");
  const [selectCategory , setSelectCategory ] = useState("");
  // use state to hande filter fn
  const [searchData , setSearchData]  = useState([])
  // use state to handel search

  const [userInput, setUserInput] = useState("");
  const [searchError , setSearchError] = useState(""); 
   // use state to cart in header
  //update cart
  const [addToCart , setAddToCart] = useState([])

  // fn to add to cart 
 const handelAddToCart = (product) => {
  if (product.stock <= 0) return;

  setAddToCart((prev) => {
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 , stock: item.stock -1}
          : item
      );
    } else {
      return [...prev, { ...product, quantity: 1 }];
    }
  });
  
  // to minus 1 stock from main products list
  setAllProducts((prev) =>
    prev.map((item) =>
      item.id === product.id
        ? { ...item, stock: item.stock - 1 }
        : item
    )
  );
};
// fn to add and decrease and dlete from cart 
  const handleIncrease = (product) => {
    setAddToCart((prev) =>
    prev.map((item) =>
      item.id === product.id
        ? { ...item, stock: item.stock - 1, quantity: item.quantity +1 }
        : item
    )
  );
};

const handleDecrease = (product) => {
     setAddToCart((prev) =>
    prev.map((item) =>
      item.id === product.id
        ? { ...item, stock: item.stock + 1, quantity: item.quantity -1 }
        : item
    )
  );
};

// filter fn 
const filteredProducts = allProducts.filter((product) => {
  const name = product.name?.toLowerCase() || "";
  const cat = product.category?.toLowerCase() || "";

  const search = userInput.toLowerCase().trim();
  const selected = selectCategory.toLowerCase();
  const categorySearch = searchCategory.toLowerCase().trim();
  // if search not there return true all products 

  const matchSearch =
    !search || name.includes(search);

  const matchCategory =
    !selected || cat === selected;

  const matchCategorySearch =
    !categorySearch || cat.includes(categorySearch);

    if (search){
      return matchSearch; 
    }
     if (categorySearch ) {
     return  matchCategorySearch
    }if (selectCategory){ 
      return  matchCategory;
    }   
});

// search fn 
const searchHandle = (e) => {
  e.preventDefault();

  if (!userInput.trim() && !selectCategory && !searchCategory) {
    setSearchError("Please enter something to search");
    setSearchData([]);
    return;
  }

  if (filteredProducts.length === 0) {
    setSearchError("We cannot find your item");
    setSearchData([]);
  } else {
    setSearchError("");
    setSearchData(filteredProducts);
  }
  
  setUserInput("");
};
// clear search fn
const clearSearch = () => {
  setSearchData([]);
  setSearchError("");
};




  const contextObject = {
    allProducts,
    filteredProducts, 
    searchData,
    searchHandle,
    userInput,
    setUserInput,
    setSelectCategory,
    handelAddToCart,
    addToCart,
    handleDecrease,
    handleIncrease,
    searchError,
    searchCategory ,
    setSearchCategory,
    clearSearch
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