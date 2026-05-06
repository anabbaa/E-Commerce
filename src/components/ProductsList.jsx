import React from "react";
import ProductCard from  "./ProductsCard"
import {card} from "../styles/globals"
import { useProducts } from "../context/CartContext";
import { AiFillProduct } from "react-icons/ai";

const ProductsList = ({onAddToCart}) => {
const {allProducts  } = useProducts()

    return (
<>
<section className="flex items-center justify-center">
  <div className="w-[70vw] h-[90vh] flex flex-col bordr ">
      <h2 className="text-2xl font-bold text-center">
        Products List
      </h2>
    
    <div className={`${card.cardsWrapper} mt-auto flex justify-between `}>
      {allProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>

  </div>
</section></>
    );
};

export default ProductsList;