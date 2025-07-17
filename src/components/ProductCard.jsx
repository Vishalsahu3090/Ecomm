
import React from "react";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
    <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
    <h3 className="text-md font-semibold mt-2">{product.title}</h3>
    <p className="text-sm text-gray-600">{product.description.slice(0, 80)}...</p>
    <div className="flex justify-between mt-4 items-center">
      <span className="text-lg font-bold">${product.price}</span>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
