import React, { useState } from 'react';
import { X, User, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { message } from 'antd';

export default function CheckoutModal({ isOpen, onClose, selectedProduct }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Firestore mein order save karna
      await addDoc(collection(db, "orders"), {
        customerName: name,
        phone: phone,
        address: address,
        productName: selectedProduct?.name,
        productPrice: selectedProduct?.price,
        createdAt: new Date()
      });

      // 2. Owner ke WhatsApp par notification bhejna
      const ownerPhoneNumber = "923001234567"; // Apna WhatsApp number yahan likhein (with country code, e.g., 923XXXXXXXXX)
      
      const whatsappMessage = encodeURIComponent(
        `🔔 *New Order Received!*\n\n👤 *Name:* ${name}\n📦 *Product:* ${selectedProduct?.name}\n💰 *Price:* ${selectedProduct?.price}\n📍 *Address:* ${address}\n📞 *Phone:* ${phone}`
      );

      window.open(`https://wa.me/${ownerPhoneNumber}?text=${whatsappMessage}`, '_blank');

      message.success("Order placed successfully!");
      setName('');
      setPhone('');
      setAddress('');
      onClose();

    } catch (error) {
      message.error("Failed to place order: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl relative">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-zinc-800/50 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Secure Checkout
          </span>
          <h2 className="text-2xl font-black text-zinc-100 uppercase tracking-wider mt-3">
            Complete Order
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {selectedProduct?.name} — <span className="text-sky-400 font-bold">{selectedProduct?.price}</span>
          </p>
        </div>

        <form onSubmit={handleCheckoutSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-3 text-zinc-500" size={16} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-xs text-zinc-100 focus:border-sky-500 outline-none"
                placeholder="Ayan Khan"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mb-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-3 text-zinc-500" size={16} />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-xs text-zinc-100 focus:border-sky-500 outline-none"
                placeholder="03XXXXXXXXX"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mb-1">Delivery Address</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3 text-zinc-500" size={16} />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-xs text-zinc-100 focus:border-sky-500 outline-none"
                placeholder="House #, Street, City"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Processing Order...' : <><CheckCircle2 size={16} /> Place Order Now</>}
          </button>
        </form>

      </div>
    </div>
  );
}