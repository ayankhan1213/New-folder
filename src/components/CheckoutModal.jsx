import React, { useState } from 'react';
import { CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';

export default function CheckoutModal({ isOpen, onClose, selectedProduct }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl p-8 max-w-md w-full relative shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
        >
          <CloseOutlined />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-3 py-1 rounded-full border border-[var(--accent-blue)]/20">
                Secure Checkout
              </span>
              <h2 className="text-2xl font-black uppercase tracking-wider text-[var(--text-heading)] mt-3">
                Complete Your Order
              </h2>
              {selectedProduct && (
                <p className="text-xs text-[var(--accent-blue)] mt-1 font-bold">
                  {selectedProduct.name} — {selectedProduct.price}
                </p>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-bold text-[var(--text-muted)] block mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ayan Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs text-[var(--text-heading)] focus:border-[var(--accent-blue)] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[var(--text-muted)] block mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="0300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs text-[var(--text-heading)] focus:border-[var(--accent-blue)] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[var(--text-muted)] block mb-1">Delivery Address (Karachi)</label>
                <textarea 
                  required
                  rows="3"
                  placeholder="House no, Street, Area..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs text-[var(--text-heading)] focus:border-[var(--accent-blue)] outline-none resize-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg cursor-pointer"
            >
              Place Order (Cash on Delivery)
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircleOutlined className="text-5xl text-emerald-400" />
            <h3 className="text-2xl font-black uppercase tracking-wider text-[var(--text-heading)]">Order Confirmed!</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Shukriya {formData.name}! Aapka order successfully place ho gaya hai aur jald hi aapke diye gaye address par deliver kar diya jayega.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); onClose(); }}
              className="px-6 py-2.5 bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-heading)] text-xs font-bold uppercase tracking-wider rounded-xl hover:border-[var(--accent-blue)] transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}