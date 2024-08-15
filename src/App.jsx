
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import HomePage from './components/homepage'
import ShoppingCart from './components/shoppingcart'
import ShopPage from './components/shoppage'
import NavBar from './components/Navbar';
import WelcomePage from "./components/welcomepage"

function App() {
  const {name} = useParams()
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [shopPoductsArray, setShopPoductsArray] = useState([])
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(function(response) {
          return response.json()
        })
        .then(function(response) {  
          setShopPoductsArray(response)
        })
        .catch(function(err) {
            console.log("Error: ", err)
        });
    
  }, []);
  return (
  <>
    <NavBar  cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} shopPoductsArray={shopPoductsArray}/>
    {name === "homepage" ? (
    <HomePage cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} shopPoductsArray={shopPoductsArray}/>
    ) : name === "shopcart" ? (
      <ShoppingCart cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} shopPoductsArray={shopPoductsArray}/>
    ) : name === "shoppage" ? (
      <ShopPage cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} shopPoductsArray={shopPoductsArray}/>
    ) : (
      <WelcomePage />
    )}
  </>
  )
}

export default App

// test it using react testing library
// host it.
