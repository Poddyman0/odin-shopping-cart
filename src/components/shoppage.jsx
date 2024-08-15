import React, {useState, useEffect} from "react";
import ShopCard from "./shopcard"
import NavBar from './Navbar';

function ShopPage({ cartCount, setCartCount, cartItems, setCartItems, shopPoductsArray }) {




  return (
    <>
        <NavBar/>
        <div id="shop-style">
            <h1 data-testid="shop-title">Shop</h1>
            <div id="shop-card-container">
                {shopPoductsArray.map(item => (
                    <ShopCard 
                      item={item}
                      key={item.id}
                      cartCount={cartCount}
                      setCartCount={setCartCount}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      shopPoductsArray={shopPoductsArray}

                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default ShopPage