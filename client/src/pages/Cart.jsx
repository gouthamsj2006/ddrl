import React, { useState, useEffect } from 'react';
import useAuthStore from '../context/AuthContext';

function Cart() {
  const { user } = useAuthStore();
  const [cartItems, setCartItems] = useState([]); // State for cart items

  useEffect(() => {
    // Fetch cart items from local storage or backend API
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Save cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (courseId) => {
    // Add course to cart (update cartItems state)
    setCartItems([...cartItems, courseId]);
  };

  const handleRemoveFromCart = (courseId) => {
    // Remove course from cart (update cartItems state)
    setCartItems(cartItems.filter((id) => id !== courseId));
  };

  const totalPrice = cartItems.reduce((total, courseId) => {
    // Calculate total price (replace with actual price fetching)
    const course = sampleCourses.find((c) => c.id === courseId);
    return total + (course ? course.price : 0);
  }, 0);

  // Sample course data (replace with actual data fetching)
  const sampleCourses = [
    { id: '1', title: 'Course 1', price: 100 },
    { id: '2', title: 'Course 2', price: 150 },
    { id: '3', title: 'Course 3', price: 200 },
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      {user ? (
        <ul>
          {cartItems.map((courseId) => {
            const course = sampleCourses.find((c) => c.id === courseId);
            return (
              <li key={courseId}>
                {course.title} - ${course.price}{' '}
                <button onClick={() => handleRemoveFromCart(courseId)}>Remove</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Please log in to view your cart.</p>
      )}
      <p>Total: ${totalPrice.toFixed(2)}</p>
      {/* Add checkout button here */}
    </div>
  );
}

export default Cart;