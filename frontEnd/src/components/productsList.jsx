import React from "react";
import { products } from "../Data/products";
import ProductCard from "./productsCard";
import {card} from "../styles/globals"

const ProductsList = ({onClick , isTrue }) => {
    return (
          <section className="px-3">
      <h2>Product List</h2>
      <div className={card.cardsWrapper}>

{products.map((product) => (   
  <ProductCard onClick={onClick} key={product.id} product={product} isTrue={isTrue} />
))}

      </div>
    </section>
    );
};

export default ProductsList;