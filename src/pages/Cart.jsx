
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-gray-200 rounded">-</button>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-gray-200 rounded">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="px-2 bg-red-500 text-white rounded">Remove</button>
                </div>
              </div>
              <img src={item.image} alt={item.title} className="h-16" />
            </div>
          ))}
          <div className="text-right font-bold text-lg">Total: ${totalAmount}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
