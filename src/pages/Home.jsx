import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, StarFilled, FireOutlined, CompassOutlined, CrownOutlined, ThunderboltOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function Home() {
  const featuredProducts = [
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
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] overflow-hidden">
      
      {/* 1. Ultra Modern Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20">
        
        {/* Glow Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[var(--accent-blue)]/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-blue-soft)] border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] text-xs font-black uppercase tracking-[0.3em]">
            <ThunderboltOutlined /> Haute Parfumerie 2026
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[var(--text-heading)] leading-[1.1]">
            Unveil Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] via-sky-300 to-white">
              Signature Aura
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[var(--text-muted)] max-w-xl mx-auto font-normal leading-relaxed">
            Meticulously blended rare French oils and authentic Arabian ouds, crafted exclusively for those who command absolute presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link 
              to="/shop" 
              className="px-8 py-4 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-sky-900/30 flex items-center gap-3 active:scale-95 cursor-pointer"
            >
              Explore Collection <ArrowRightOutlined />
            </Link>
            <Link 
              to="/shop" 
              className="px-8 py-4 bg-[var(--bg-surface)] hover:bg-[var(--border-color)] border border-[var(--border-color)] text-[var(--text-heading)] text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all cursor-pointer"
            >
              Best Sellers
            </Link>
          </div>

        </div>
      </section>

      {/* 2. Quick Category Showcase Bar */}
      <section className="border-y border-[var(--border-color)] bg-[var(--bg-surface)]/40 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Link to="/shop" className="p-3 rounded-xl hover:bg-[var(--bg-surface)] transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-heading)]">
            <FireOutlined className="text-[var(--accent-blue)]" /> Royal Oud
          </Link>
          <Link to="/shop" className="p-3 rounded-xl hover:bg-[var(--bg-surface)] transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-heading)]">
            <CompassOutlined className="text-[var(--accent-blue)]" /> Men's Signature
          </Link>
          <Link to="/shop" className="p-3 rounded-xl hover:bg-[var(--bg-surface)] transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-heading)]">
            <StarFilled className="text-[var(--accent-blue)]" /> Women's Elegance
          </Link>
          <Link to="/shop" className="p-3 rounded-xl hover:bg-[var(--bg-surface)] transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-heading)]">
            <CrownOutlined className="text-[var(--accent-blue)]" /> Unisex Masterpieces
          </Link>
        </div>
      </section>

      {/* 3. Featured Masterpieces Section (Clean Minimalist Cards) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-3 py-1 rounded-full border border-[var(--accent-blue)]/20">
              Curated Selection
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[var(--text-heading)] mt-3">
              Featured Masterpieces
            </h2>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-[var(--accent-blue)] hover:underline flex items-center gap-1.5">
            View Complete Catalog <ArrowRightOutlined />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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

              {/* Clean Content Area */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-[var(--text-heading)]">{product.name}</h3>
                  <p className="text-sm font-black text-[var(--accent-blue)] mt-1">{product.price}</p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Link 
                    to="/shop" 
                    className="flex-1 py-3 text-center bg-[var(--bg-main)] hover:bg-[var(--border-color)] text-[var(--text-heading)] text-xs font-bold uppercase tracking-wider rounded-xl border border-[var(--border-color)] transition-all"
                  >
                    Details
                  </Link>
                  <Link 
                    to="/shop" 
                    className="px-4 py-3 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs rounded-xl transition-all shadow-md flex items-center justify-center"
                  >
                    <ShoppingCartOutlined className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Brand Legacy & Craftsmanship Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-[var(--border-color)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-3 py-1 rounded-full border border-[var(--accent-blue)]/20">
              The Heritage
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-[var(--text-heading)] leading-tight">
              Crafted For Those Who <span className="text-[var(--accent-blue)]">Leave A Legacy</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Every bottle of MYC Parfums is an artisan masterpiece. We travel across global sanctums to source rare ingredients—from smoky Arabian ouds to delicate French florals—blended meticulously by master perfumers to ensure a 24-hour lasting aura.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-[var(--accent-blue)] pl-4">
                <h4 className="text-2xl font-black text-[var(--text-heading)]">100%</h4>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">Pure Extrait Oils</p>
              </div>
              <div className="border-l-2 border-[var(--accent-blue)] pl-4">
                <h4 className="text-2xl font-black text-[var(--text-heading)]">24H+</h4>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">Sillage & Longevity</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Box */}
          <div className="relative h-[400px] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]"></div>
            <div className="text-center space-y-3 relative z-10">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--accent-blue)]">MYC Parfums Lab</span>
              <h3 className="text-2xl md:text-3xl font-black tracking-widest text-[var(--text-heading)]">MASTER PARFUMER</h3>
              <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">Where tradition meets modern sophistication in every single drop.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Customer Testimonials Section */}
      <section className="bg-[var(--bg-surface)]/30 border-t border-[var(--border-color)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-3 py-1 rounded-full border border-[var(--accent-blue)]/20">
              Client Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[var(--text-heading)]">
              Loved By Connoisseurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="flex text-amber-400 gap-1 text-xs">★★★★★</div>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                "The Royal Oud Elixir is phenomenal. The projection is insane and it easily lasts the entire workday without fading."
              </p>
              <div className="pt-4 border-t border-[var(--border-color)] text-xs">
                <span className="font-bold text-[var(--text-heading)] block">Hamza Siddiqui</span>
                <span className="text-[var(--text-muted)]">Verified Buyer</span>
              </div>
            </div>

            <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="flex text-amber-400 gap-1 text-xs">★★★★★</div>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                "Packaging and presentation felt like a luxury international brand. Noir Velvet Scent is my absolute go-to now."
              </p>
              <div className="pt-4 border-t border-[var(--border-color)] text-xs">
                <span className="font-bold text-[var(--text-heading)] block">Zainab Malik</span>
                <span className="text-[var(--text-muted)]">Verified Buyer</span>
              </div>
            </div>

            <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="flex text-amber-400 gap-1 text-xs">★★★★★</div>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                "Extremely premium feel. Got compliments on the very first day I wore Golden Amber Essence. Highly recommended!"
              </p>
              <div className="pt-4 border-t border-[var(--border-color)] text-xs">
                <span className="font-bold text-[var(--text-heading)] block">Usman Tariq</span>
                <span className="text-[var(--text-muted)]">Verified Buyer</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Newsletter / Inner Circle Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-main)] border border-[var(--border-color)] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_70%)]"></div>
          
          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-3 py-1 rounded-full border border-[var(--accent-blue)]/20">
              Private Privilege
            </span>
            <h2 className="text-3xl font-black uppercase tracking-wider text-[var(--text-heading)]">
              Join The Inner Circle
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              Subscribe to receive private release access, secret discounts, and luxury fragrance guides directly in your inbox.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="email" 
                required 
                placeholder="Enter your email address" 
                className="flex-1 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl px-5 py-3.5 text-xs text-[var(--text-heading)] focus:border-[var(--accent-blue)] outline-none"
              />
              <button 
                type="submit" 
                className="px-8 py-3.5 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-bold uppercase tracking-widest rounded-2xl transition-all cursor-pointer shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* 7. Professional Website Footer */}
      <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-color)] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-black uppercase tracking-widest text-[var(--text-heading)]">
              MYC <span className="text-[var(--accent-blue)]">.</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Crafting premium signature fragrances with rare French oils and authentic Arabian ouds for absolute elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[var(--text-heading)]">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li><Link to="/" className="hover:text-[var(--accent-blue)] transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-[var(--accent-blue)] transition-colors">Shop Collections</Link></li>
              <li><Link to="/shop" className="hover:text-[var(--accent-blue)] transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[var(--text-heading)]">Customer Care</h4>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li><span className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer">Track Order</span></li>
              <li><span className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer">Shipping Policy</span></li>
              <li><span className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer">Returns & Exchanges</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[var(--text-heading)]">Get in Touch</h4>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Karachi, Pakistan<br />
              Email: aw1800606.com<br />
              Phone: +92 349 0243870
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <p>© 2026 MYC Parfums. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[var(--accent-blue)] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[var(--accent-blue)] cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}