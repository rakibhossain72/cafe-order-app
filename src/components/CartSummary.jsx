import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import OrderModal from './OrderModal';

export default function CartSummary({ products, quantities }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = products.filter(product => quantities[product.id] > 0);
  const total = cartItems.reduce((sum, product) => 
    sum + (product.price * (quantities[product.id] || 0)), 0
  );

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-orange-200 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ShoppingBag className="text-orange-500" />
              <span className="text-gray-800">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <div className="text-2xl font-bold text-orange-700">
              Total: ৳{total}
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors text-lg font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        products={products}
        quantities={quantities}
      />
    </>
  );
}