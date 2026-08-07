import React from 'react';
import { Link } from 'react-router-dom';
import { SafetyCertificateOutlined, TrophyOutlined, HeartOutlined, CompassOutlined } from '@ant-design/icons';

export default function Legacy() {
  const milestones = [
    {
      year: '2018',
      title: 'The Humble Beginning',
      description: 'Started as a small passion project in Karachi, handcrafting bespoke Oriental and Oud blends for close family and connoisseurs.'
    },
    {
      year: '2020',
      title: 'Mastering the Craft',
      description: 'Partnered with generational perfumers globally to source rare sustainably-harvested essential oils and authentic Arabian ingredients.'
    },
    {
      year: '2023',
      title: 'Digital Expansion',
      description: 'Launched our digital storefront, bringing luxury artisan fragrances directly to doorsteps nationwide with exceptional customer trust.'
    },
    {
      year: '2026',
      title: 'A Modern Heritage',
      description: 'Standing tall as a recognized symbol of elegance, expanding our catalog with top-tier signature and modern unisex collections.'
    }
  ];

  const values = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-[var(--accent-blue)]" />,
      title: 'Uncompromised Purity',
      description: 'Every single bottle is compounded using premium, skin-safe, long-lasting ingredients that undergo strict quality controls.'
    },
    {
      icon: <TrophyOutlined className="text-2xl text-[var(--accent-blue)]" />,
      title: 'Artisanal Excellence',
      description: 'We blend traditional oriental heritage techniques with modern refinement to create scents that leave unforgettable impressions.'
    },
    {
      icon: <HeartOutlined className="text-2xl text-[var(--accent-blue)]" />,
      title: 'Crafted with Passion',
      description: 'Perfume is deeply personal. We design each fragrance to evoke specific memories, emotions, and personal triumphs.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-3 py-1 rounded-full border border-[var(--accent-blue)]/20">
            Our Story & Heritage
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-[var(--text-heading)]">
            The Legacy of Scent
          </h1>
          <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed">
            We believe that a fragrance is more than just an accessory—it is an invisible signature, a bearer of memories, and a reflection of true character.
          </p>
        </div>

        {/* Hero Banner / Visual Story */}
        <div className="relative h-96 rounded-3xl overflow-hidden border border-[var(--border-color)] bg-zinc-950 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80" 
            alt="Perfume Legacy" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center max-w-xl px-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white">
              Rooted in Tradition, Designed for Tomorrow
            </h2>
            <p className="text-xs text-zinc-300">
              Discover how our passion for exceptional oriental and modern notes transformed into a timeless brand.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[var(--text-heading)]">
              What We Stand For
            </h2>
            <p className="text-xs text-[var(--text-muted)]">The foundational pillars that guide every creation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div 
                key={index}
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-8 rounded-3xl space-y-4 hover:border-[var(--accent-blue)]/50 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[var(--text-heading)]">{item.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline / Journey Section */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[var(--text-heading)]">
              Our Journey Through Time
            </h2>
            <p className="text-xs text-[var(--text-muted)]">Key milestones that shaped our path.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <div 
                key={idx}
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 rounded-3xl space-y-4 relative overflow-hidden group hover:border-[var(--accent-blue)]/50 transition-all shadow-lg"
              >
                <span className="text-3xl font-black text-[var(--accent-blue)] opacity-80">
                  {milestone.year}
                </span>
                <h3 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-wider">
                  {milestone.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl p-10 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[var(--text-heading)]">
            Experience the Craft Yourself
          </h2>
          <p className="text-xs text-[var(--text-muted)] max-w-xl mx-auto">
            Explore our curated collections and find the signature fragrance that defines your individual legacy.
          </p>
          <div>
            <Link 
              to="/shop" 
              className="inline-block px-8 py-3.5 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md"
            >
              Explore Shop Catalog
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}