import Header from "./Header"
import SelectCategory from "./SelectCategory"
import LookUp from "./LookUp"
import SearchProducts from "./SearchProducts"
import Category from "./Category"
import ProductsList from "./ProductsList"
import { useProducts } from "../context/CartContext"
//import {pageSection } from "../styles/globals"
import Cart from "./Cart"
import Layout from "./LayOut"
import Load from "./Load"
import Notify  from "./Notify"

const Home = ({onAddToCart}) =>{ 
    const { searchError,filteredProducts ,  searchData , addToCart} = useProducts();
    console.log(addToCart)
    return (
  <>
  <Notify addToCart={addToCart} />
    <SelectCategory />
    <LookUp />
    <section className={``}>
      {searchData.length > 0 ? (
  <SearchProducts />
) : searchError ? (
  <p className="text-bold text-2xl">{searchError}</p>
) : filteredProducts.length > 0 ? (
  <Category />
) :  (
  <ProductsList onAddToCart={onAddToCart} />
)}
    </section>
  </>
)
}
export default Home