import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import HomePage from './components/homepage'
import ShopPage from './components/shoppage'
import WelcomePage from './components/welcomepage.jsx';
import ShoppingCart from './components/shoppingcart.jsx';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/:name",
    element: <App />
  },
  {
    path: "/",
    element: <HomePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
