import React from 'react'
import Home from './components/Home'
import { useProducts} from './context/CartContext'
import Cart from './components/Cart'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import ProductsList from './components/ProductsList'
import Layout from './components/LayOut'
import Load from './components/Load'
import ViewMore from './components/ViewMore'

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
        <Cart onAddToCart={handelAddToCart} 
/>
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
  {
    path: "/viewmore/:id",
    element : (
      <Layout>
        <ViewMore />
      </Layout>
    )
  }
]);

  return (
    <>    
    <RouterProvider  router={router}  ></RouterProvider>
  
    </>
  
      )  
}

export default App