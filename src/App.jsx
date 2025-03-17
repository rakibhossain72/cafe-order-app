import React, { useState } from 'react';
import { Coffee } from 'lucide-react';
import { products } from './data/products';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';

function App() {
  const [quantities, setQuantities] = useState({});
  const categories = Array.from(new Set(products.map(p => p.category)));

  const handleQuantityChange = (id, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [id]: newQuantity
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-orange-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="h-20 w-20 filter invert" />
            <h1 className="text-3xl font-bold text-gray-800">Coffee Station</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 pb-24">
        {categories.map(category => (
          <ProductList
            key={category}
            category={category}
            products={products}
            quantities={quantities}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </main>

      <CartSummary products={products} quantities={quantities} />
    </div>
  );
}

export default App;