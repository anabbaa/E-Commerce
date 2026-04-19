import Header from "./Header"
import SelectCategory from "./SelectCategory"
import LookUp from "./LookUp"
import SearchProducts from "./SearchProducts"
import Category from "./Category"
import ProductsList from "./ProductsList"
import { useProducts } from "../context/CartContext"
import {pageSection } from "../styles/globals"
import Cart from "./Cart"
import Layout from "./LayOut"

const Home = ({onAddToCart}) =>{ 
    const { category, filteredProducts } = useProducts();
    return (
        <>
      
      <SelectCategory  /> 

    <LookUp />
    <section className={`${pageSection.base} flex items-center justify-center`}>
  {filteredProducts.length > 0 ? (
    <SearchProducts />
  ) : category.length > 0 ? (
    <Category  />
  ) : (
    <ProductsList onAddToCart={onAddToCart} />
  )}
</section>

</>
    )

}
export default Home