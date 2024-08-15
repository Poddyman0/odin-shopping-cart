import { useState, useEffect } from 'react'
import NavBar from './Navbar';
import CartItem from './cartitem'

function ShoppingCart({ cartCount, setCartCount, cartItems, setCartItems, shopPoductsArray }) {
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.amount;
    });
    setTotalCart(total);
  }, [cartItems]);

  return (
    <>
        <NavBar/>
        <div id="cart-style">
        <div id="cart-purchase-card">
          <div id="cart-total" data-testid="cart-total">
            <strong>Total: </strong><div data-testid="cart-total-num">£{totalCart}</div>
          </div>
          <button className="btn btn-dark" id="pay-btn">Pay
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z"/>
            </svg>
          </button>
        </div>
        <div id="cart-card-container">
                {cartItems.map(item => (
                    <CartItem 
                      item={item}
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                    />
                ))}
        </div>

        </div>
    </>
  )
}

export default ShoppingCart