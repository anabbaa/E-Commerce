import React from "react";
import Home from "./components/Home";
import { useProducts } from "./context/CartContext";
import Cart from "./components/Cart";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/LayOut";
import ViewMore from "./components/ViewMore";

const App = () => {
  const { handelAddToCart } = useProducts();

  const router = createHashRouter([
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
          <Cart onAddToCart={handelAddToCart} />
        </Layout>
      ),
    },
    {
      path: "/viewmore/:id",
      element: (
        <Layout>
          <ViewMore onAddToCart={handelAddToCart} />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;