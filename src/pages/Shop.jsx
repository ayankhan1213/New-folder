import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { StarFilled, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import CheckoutModal from '../components/CheckoutModal';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal aur active product states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  // URL query parameter change hone par category pill ko shift/select karne ke liye
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }
  }, [categoryParam]);

  const products = [
    {
      id: 1,
      name: 'Royal Oud Elixir',
      category: 'Oud & Woody',
      price: 'Rs. 1,150',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Noir Velvet Scent',
      category: 'Unisex Luxury',
      price: 'Rs. 950',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Golden Amber Essence',
      category: 'Signature Oriental',
      price: 'Rs. 1,050',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Azure Blue Intense',
      category: "Men's Signature",
      price: 'Rs. 990',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      name: 'Rose Petal Bloom',
      category: "Women's Elegance",
      price: 'Rs. 1,100',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      name: 'Midnight Smoke Oud',
      category: 'Oud & Woody',
      price: 'Rs. 1,200',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const categories = ['All', 'Oud & Woody', "Men's Signature", "Women's Elegance", 'Unisex Luxury', 'Signature Oriental'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-3 py-1 rounded-full border border-[var(--accent-blue)]/20">
            Full Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-[var(--text-heading)]">
            Explore Collections
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            Discover our complete range of exquisite handcrafted fragrances designed for lasting impressions.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[var(--bg-surface)] p-4 rounded-2xl border border-[var(--border-color)]">
          
          {/* Categories Pill List */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--accent-blue)] text-white shadow-md'
                    : 'bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--border-color)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-xs" />
            <input 
              type="text" 
              placeholder="Search perfumes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[var(--text-heading)] focus:border-[var(--accent-blue)] outline-none"
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden group hover:border-[var(--accent-blue)]/50 transition-all duration-300 shadow-xl flex flex-col"
              >
                {/* Image Box */}
                <div className="relative h-72 overflow-hidden bg-zinc-950">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[var(--bg-main)]/80 backdrop-blur-md text-[var(--text-heading)] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-color)]">
                    {product.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-[var(--bg-main)]/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full border border-[var(--border-color)] flex items-center gap-1">
                    <StarFilled /> {product.rating}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-heading)]">{product.name}</h3>
                    <p className="text-sm font-black text-[var(--accent-blue)] mt-1">{product.price}</p>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Link 
                      to={`/product/${product.id}`}
                      className="flex-1 py-3 text-center bg-[var(--bg-main)] hover:bg-[var(--border-color)] text-[var(--text-heading)] text-xs font-bold uppercase tracking-wider rounded-xl border border-[var(--border-color)] transition-all flex items-center justify-center"
                    >
                      Details
                    </Link>
                    <button 
                      onClick={() => alert(`${product.name} added to cart!`)}
                      className="px-4 py-3 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs rounded-xl transition-all shadow-md flex items-center justify-center cursor-pointer"
                    >
                      <ShoppingCartOutlined className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-20 text-[var(--text-muted)] text-sm uppercase tracking-widest">
              No matching fragrances found.
            </div>
          )}
        </div>

      </div>

      {/* Checkout Modal Component Integration */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        selectedProduct={activeProduct} 
      />
    </div>
  );
}