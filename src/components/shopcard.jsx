import React, { useState } from 'react'
import { Typography, Rating } from '@mui/material';

function ShopCard({item, cartCount, setCartCount, cartItems, setCartItems, shopPoductsArray}) {
    const [formData, setFormData] = useState(0);
    
    function handleAmountInc() {
        setFormData(formData + 1)
        
    }

    function handleAmountDec() {
        setFormData(formData - 1)
    }

    function handleAddToCart() {
            setCartItems([...cartItems, {
                id: item.id, 
                image: item.image, 
                title: item.title,
                price: item.price, 
                amount: formData,
            }])
            setCartCount( cartCount + formData)
            setFormData(0)
            console.log("cart items", cartItems)
    }


  return (
    <>
    <div id={item.id} className="ind-card-display" data-testid="shop-item">
        <div className="white-box-img"><img data-testid="shop-item-picture" className="item-pic" src={item.image} id={item.image} alt={item.title}></img></div>
        <div className="item-title" data-testid="shop-item-title" id={item.title}><strong>{item.title}</strong></div>
            <div className="item-price" data-testid="shop-item-price"  id={item.price}><strong>Price: </strong>£{item.price}</div>
            <div className="item-description" data-testid="shop-item-description" id={item.description}><strong>Description: </strong>{item.description}</div>
            <div className="item-category" data-testid="shop-item-category" id={item.category}><strong>Category: </strong>{item.category}</div>
            <div className="item-rating" data-testid="shop-item-rating" id={item.rating.rate}><strong>Rating: </strong></div>
            <Rating name="half-rating-read" defaultValue={item.rating.rate} precision={0.1} readOnly />
            <div className="item-rating-count" data-testid="shop-item-rating-count"  id={item.rating.count}><strong>Reviews: </strong>{item.rating.count}</div>
            <form className="ind-card-form">
                <label data-testid="shop-item-amount-label" htmlFor="amount-input"><strong>Amount: </strong></label>
                <input data-testid="shop-item-amount-input" id="amount-input" className="form-control input-amount-style" type="number" value={formData} onChange={(e) => setFormData(parseInt(e.target.value))} required/>
                <br></br>
                <button data-testid="shop-item-increment-button" type="button" onClick={() => handleAmountInc()} className="btn btn-dark increment-amount-button"><strong>Increment Amount</strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                </button>
                <button data-testid="shop-item-decrement-button" type="button"  onClick={() => handleAmountDec()} className="btn btn-dark decrement-amount-button"><strong>Decrement Amount</strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                </svg>
                </button>
                <button data-testid="shop-item-add-to-cart-button" id="submit" type="button"  onClick={() => handleAddToCart()} className=" btn btn-dark add-to-cart-button"><strong>Add To Cart</strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                </button>
            </form>
    </div>
    </>
  )
}

export default ShopCard;