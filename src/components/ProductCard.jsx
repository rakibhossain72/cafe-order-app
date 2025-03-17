import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ProductCard({ product, quantity, onQuantityChange }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-orange-100 transform transition-all duration-300 hover:scale-[1.02]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-700">৳{product.price}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onQuantityChange(product.id, Math.max(0, quantity - 1))}
              className="p-1 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center text-gray-800">{quantity}</span>
            <button
              onClick={() => onQuantityChange(product.id, quantity + 1)}
              className="p-1 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}