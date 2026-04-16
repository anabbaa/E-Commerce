import React from 'react'
import {pageSection } from "./styles/globals"
import ProductsList from  "./components/ProductsList"
import Header from  "./components/Header"
import SelectCategory from  "./components/SelectCategory"
import LookUp from "./components/LookUp"
import SearchProducts from './components/SearchProducts'
import { useProducts} from './context/CartContext'
import Category from "./components/Category"
import Cart from './components/Cart'

const App = () => {

 
const { handelAddToCart, cartView, category, filteredProducts} = useProducts();

  if (cartView) return <Cart />

  return (
    <>    
    <Header  title="My Ecommerce Store" subTitle= "welcome to My Store"/>
      <SelectCategory  /> 

    <LookUp />
    <section className={`${pageSection.base} flex items-center justify-center`}>
  {filteredProducts.length > 0 ? (
    <SearchProducts />
  ) : category.length > 0 ? (
    <Category  />
  ) : (
    <ProductsList onAddToCart={handelAddToCart} />
  )}
</section>
    </>
  
      )  
}

export default App