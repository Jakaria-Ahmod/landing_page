import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Array to hold cart items

  const addToCart = (product) => {
    // Check if the product is already in the cart
    if (cartItems.some(item => item.id === product.id)) {
      // alert(`Already in cart `);
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'This product is already in your cart!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      });
    } else {
      setCartItems(prevItems => [...prevItems, product]);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Product has been added to your cart.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const cartCount = cartItems.length; // Count of unique products in the cart

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
