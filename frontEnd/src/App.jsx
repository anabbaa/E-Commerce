import React, {useState}from 'react'
import {pageSection ,  typography } from "./styles/globals"
import ProductsList from './components/productsList'
import Header from "./components/Header"

const App = () => {
  const [isTrue , setIsTrue] = useState(false);
  return (
    <>
    <Header  title="My Ecommerce Store" subTitle= "welcome to My Store"/>
    <section className={pageSection.base}>
      <h1 className={typography.heading}>Hello World</h1>

      <ProductsList 
  isTrue={isTrue} 
  setIsTrue={setIsTrue} 
  onClick={()=> setIsTrue(!isTrue)} 
/>
    </section>
    </>
      )  
}

export default App