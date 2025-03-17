import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, category, quantities, onQuantityChange }) {
  const categoryProducts = products.filter(product => product.category === category);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={quantities[product.id] || 0}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </div>
    </div>
  );
}