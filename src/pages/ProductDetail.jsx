import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarFilled, ArrowLeftOutlined, ThunderboltOutlined } from '@ant-design/icons';
import CheckoutModal from '../components/CheckoutModal';

export default function ProductDetail() {
  const { id } = useParams();

  // Modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Temporary database of products (Real project mein yeh API ya props se aata hai)
  const productsData = [
    {
      id: '1',
      name: 'Royal Oud Elixir',
      category: 'Oud & Woody',
      price: 'Rs. 1,150',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
      description: 'A majestic blend of rich smoky Arabian ouds and warm French amber oils, crafted to leave an unforgettable magnetic aura.',
      topNotes: 'Bergamot, Saffron, Smoky Wood',
      heartNotes: 'Pure Cambodian Oud, Rose, Patchouli',
      baseNotes: 'Amber, White Musk, Leather'
    },
    {
      id: '2',
      name: 'Noir Velvet Scent',
      category: 'Unisex Luxury',
      price: 'Rs. 950',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
      description: 'An enigmatic unisex fragrance capturing the deep sensuality of velvet textures mixed with spicy oriental undertones.',
      topNotes: 'Black Pepper, Mandarin',
      heartNotes: 'Velvet Orchid, Spices',
      baseNotes: 'Vanilla Bean, Dark Wood'
    },
    {
      id: '3',
      name: 'Golden Amber Essence',
      category: 'Signature Oriental',
      price: 'Rs. 1,050',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
      description: 'Radiant and opulent, this oriental masterpiece glows with warm golden spices and rich botanical extracts.',
      topNotes: 'Cardamom, Cinnamon',
      heartNotes: 'Ambergris, Iris',
      baseNotes: 'Sandalwood, Golden Resin'
    },
    {
      id: '4',
      name: 'Azure Blue Intense',
      category: "Men's Signature",
      price: 'Rs. 990',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
      description: 'A crisp, aquatic burst of freshness combined with deep woody undertones designed for the modern dynamic man.',
      topNotes: 'Sea Water, Mint, Lemon',
      heartNotes: 'Geranium, Lavender',
      baseNotes: 'Cedarwood, Musk'
    },
    {
      id: '5',
      name: 'Rose Petal Bloom',
      category: "Women's Elegance",
      price: 'Rs. 1,100',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
      description: 'A breathtaking feminine bouquet of freshly bloomed French roses wrapped in subtle sweet undertones.',
      topNotes: 'Dewy Rose, Lychee',
      heartNotes: 'Damask Rose, Peony',
      baseNotes: 'White Musk, Cashmeran'
    },
    {
      id: '6',
      name: 'Midnight Smoke Oud',
      category: 'Oud & Woody',
      price: 'Rs. 1,200',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
      description: 'Intense, dark, and utterly hypnotic. Created for late-night gatherings and high-end formal evenings.',
      topNotes: 'Incense, Smoke, Nutmeg',
      heartNotes: 'Agarwood (Oud), Tobacco',
      baseNotes: 'Dark Amber, Ebony Wood'
    }
  ];

  // ID ke mutabiq product find karo
  const product = productsData.find(p => p.id === id) || productsData[0];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-blue)] hover:underline">
          <ArrowLeftOutlined /> Back to Shop
        </Link>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 md:p-12 rounded-3xl shadow-2xl items-center">
          
          {/* Product Image */}
          <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden bg-zinc-950 border border-[var(--border-color)]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 bg-[var(--bg-main)]/80 backdrop-blur-md text-[var(--accent-blue)] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-[var(--border-color)]">
              {product.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1 bg-[var(--bg-main)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                  <StarFilled /> {product.rating} Rating
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[var(--accent-blue)]">In Stock</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[var(--text-heading)] pt-2">
                {product.name}
              </h1>
              <p className="text-2xl font-black text-[var(--accent-blue)]">{product.price}</p>
            </div>

            <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed">
              {product.description}
            </p>

            {/* Fragrance Notes Box */}
            <div className="bg-[var(--bg-main)] border border-[var(--border-color)] p-5 rounded-2xl space-y-2 text-xs">
              <p className="font-bold text-[var(--text-heading)] uppercase tracking-wider mb-2">Fragrance Notes:</p>
              <p><strong className="text-[var(--accent-blue)]">Top Notes:</strong> {product.topNotes}</p>
              <p><strong className="text-[var(--accent-blue)]">Heart Notes:</strong> {product.heartNotes}</p>
              <p><strong className="text-[var(--accent-blue)]">Base Notes:</strong> {product.baseNotes}</p>
            </div>

            {/* Buy Now Button jo Checkout Popup kholega */}
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full py-4 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <ThunderboltOutlined /> Proceed To Buy Now
            </button>
          </div>

        </div>

      </div>

      {/* Checkout Modal Popup */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        selectedProduct={product} 
      />
    </div>
  );
}