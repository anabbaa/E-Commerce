import React, {useState}from 'react'
import {pageSection } from "./styles/globals"
import ProductsList from  "./components/ProductsList"
import Header from  "./components/Header"
import SelectCategory from  "./components/SelectCategory"

const App = () => {
  const [putInCart , setPutInCart] = useState([])
  const [searchItem , setSearchItem ] = useState("");
  const [selectCategory , setSelectCategory ] = useState("");

  const addToCart = (product)=>{
    setPutInCart((prevState)=> [...prevState , product])
  }
  console.log(putInCart)

  return (
    <>
    <Header  title="My Ecommerce Store" subTitle= "welcome to My Store"/>
        <SelectCategory searchItem={searchItem} setSearchItem={setSearchItem}
    selectCategory={selectCategory} setSelectCategory={setSelectCategory}/>

    <section className={pageSection.base}  flex items-center justify-center>
      <ProductsList 
  putInCart={putInCart} 
  onClick={addToCart}
/>
    </section>
    </>
      )  
}

export default App