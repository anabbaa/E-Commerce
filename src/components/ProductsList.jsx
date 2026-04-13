import React from "react";
import { products } from "../data/products";
import ProductCard from  "./ProductsCard"
import {card} from "../styles/globals"

const ProductsList = ({onClick }) => {
  
    return (
<>
<section className="h-[70vh] flex justify-center">
  <div className="w-[90vw] h-[60vh]">
  <h2 className="text-center text-2xl font-bold mb-4  h-[10vh]">
      Products List
    </h2>
    
    <div className={card.cardsWrapper}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onClick}
        />
      ))}
    </div>

  </div>
</section></>
    );
};

export default ProductsList;