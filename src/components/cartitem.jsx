
import React, { useState } from 'react'

function CartItem ({item, cartCount, setCartCount, cartItems, setCartItems}) {
    return (
    <div id={item.id} className="ind-card-display-cart" data-testid="cart-item">
    <div className="white-box-img-cart"><img data-testid="cart-item-test-image" className="item-pic-cart" src={item.image} id={item.image} alt={item.title}></img></div>
    <div className="item-title" data-testid="cart-item-test-title" id={item.title}><strong>{item.title}</strong></div>
        <div className="item-price" data-testid="cart-item-test-price" id={item.price}><strong>Price: </strong>£{item.price}</div>
        <div className="item-amount-cart" data-testid="cart-item-test-amount" id={item.amount}><strong>Amount: </strong>{item.amount}</div>
    </div>
    )
}
export default CartItem;
