import React from 'react'
import Home from './components/Home'
import { useProducts} from './context/CartContext'
import Cart from './components/Cart'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import ProductsList from './components/ProductsList'
import Layout from './components/LayOut'

const App = () => {

const { handelAddToCart} = useProducts();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home onAddToCart={handelAddToCart} />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/products",
    element: (
      <Layout>
        <ProductsList />
      </Layout>
    ),
  },
]);

  return (
    <>    
    <RouterProvider  router={router}  ></RouterProvider>
  
    </>
  
      )  
}

export default App