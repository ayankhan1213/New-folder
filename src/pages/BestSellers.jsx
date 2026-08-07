import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarFilled, ShoppingCartOutlined, FireOutlined } from '@ant-design/icons';
import CheckoutModal from '../components/CheckoutModal';
import { message } from 'antd';

export default function BestSellers() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const bestSellers = [
    {
      id: 1,
      name: 'Royal Oud Elixir',
      category: 'Oud & Woody',
      price: 'Rs. 1,150',
      rating: '4.9',
      reviews: '240+ Sold',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Golden Amber Essence',
      category: 'Signature Oriental',
      price: 'Rs. 1,050',
      rating: '5.0',
      reviews: '310+ Sold',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Azure Blue Intense',
      category: "Men's Signature",
      price: 'Rs. 990',
      rating: '4.7',
      reviews: '190+ Sold',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      name: 'Rose Petal Bloom',
      category: "Women's Elegance",
      price: 'Rs. 1,100',
      rating: '4.9',
      reviews: '280+ Sold',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      name: 'Midnight Smoke Oud',
      category: 'Oud & Woody',
      price: 'Rs. 1,200',
      rating: '5.0',
      reviews: '350+ Sold',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 11,
      name: 'Sauvage Extreme',
      category: "Men's Signature",
      price: 'Rs. 1,190',
      rating: '4.9',
      reviews: '420+ Sold',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <FireOutlined /> Customer Favorites
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-[var(--text-heading)]">
            Best Sellers
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            The most coveted and highly-rated fragrances adored by our connoisseurs nationwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <div 
              key={product.id}
              className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden group hover:border-[var(--accent-blue)]/50 transition-all duration-300 shadow-xl flex flex-col relative"
            >
              {/* Best Seller Badge */}
              <div className="absolute top-4 left-4 z-10 bg-amber-500 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <FireOutlined /> Top Choice
              </div>

              {/* Image Box */}
              <div className="relative h-72 overflow-hidden bg-zinc-950">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-[var(--bg-main)]/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full border border-[var(--border-color)] flex items-center gap-1">
                  <StarFilled /> {product.rating}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">{product.category}</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">{product.reviews}</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-heading)]">{product.name}</h3>
                  <p className="text-sm font-black text-[var(--accent-blue)]">{product.price}</p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Link 
                    to={`/product/${product.id}`}
                    className="flex-1 py-3 text-center bg-[var(--bg-main)] hover:bg-[var(--border-color)] text-[var(--text-heading)] text-xs font-bold uppercase tracking-wider rounded-xl border border-[var(--border-color)] transition-all flex items-center justify-center"
                  >
                    Details
                  </Link>
                  <button 
                    onClick={() => message.success(`${product.name} added to cart!`)}
                    className="px-4 py-3 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs rounded-xl transition-all shadow-md flex items-center justify-center cursor-pointer"
                  >
                    <ShoppingCartOutlined className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Checkout Modal Component */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        selectedProduct={activeProduct} 
      />
    </div>
  );
}