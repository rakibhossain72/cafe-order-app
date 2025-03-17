import React from 'react';
import { X } from 'lucide-react';

export default function OrderModal({ isOpen, onClose, products, quantities }) {
  if (!isOpen) return null;

  const cartItems = products.filter(product => quantities[product.id] > 0);
  const total = cartItems.reduce((sum, product) => 
    sum + (product.price * (quantities[product.id] || 0)), 0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Order Confirmation</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center py-2">
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {quantities[item.id]}</p>
                </div>
                <p className="font-semibold text-orange-700">
                  ৳{item.price * quantities[item.id]}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total Amount</span>
            <span className="text-orange-700">৳{total}</span>
          </div>

          <button
            onClick={() => {
              alert('Order placed successfully!');
              onClose();
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}