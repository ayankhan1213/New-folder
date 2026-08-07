import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { db, auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { message } from 'antd';
import { DeleteOutlined, ShoppingCartOutlined, ArrowRightOutlined, LockOutlined } from '@ant-design/icons';

export default function Cart() {
  const { cart = [], removeFromCart, clearCart } = useCart();
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Direct onAuthStateChanged integration inside Cart component
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Changed - Current User:", currentUser);
      setUser(currentUser);
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const totalAmount = Array.isArray(cart) ? cart.reduce((total, item) => {
    const cleanPrice = parseInt(String(item.price).replace(/\D/g, ''), 10);
    return total + (isNaN(cleanPrice) ? 0 : cleanPrice);
  }, 0) : 0;

  const handleCheckout = async () => {
    console.log("Checkout clicked. User status:", user);

    if (!user) {
      message.error("Access Denied! Please sign in first to place your order.");
      return;
    }

    if (!cart || cart.length === 0) {
      message.warning("Your cart is empty!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        customerName: user.displayName || user.email,
        customerEmail: user.email,
        items: cart,
        totalAmount: totalAmount,
        orderDate: serverTimestamp(),
        status: "Pending"
      });

      message.success("Order placed successfully! Data saved to Firestore.");
      if (clearCart) clearCart();
      navigate('/shop');
    } catch (error) {
      console.error("Error placing order: ", error);
      message.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return <div className="min-h-screen bg-[var(--bg-main)] text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black uppercase text-[var(--text-heading)]">Your Shopping Cart</h1>
          <p className="text-xs text-[var(--text-muted)]">Review your selected luxury items before checkout.</p>
        </div>

        {!cart || cart.length === 0 ? (
          <div className="text-center py-20 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl space-y-4 shadow-xl">
            <ShoppingCartOutlined className="text-5xl text-[var(--text-muted)]" />
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">Your cart is empty</p>
            <Link to="/shop" className="inline-block px-6 py-3 bg-[var(--accent-blue)] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all">
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-end">
              <button 
                onClick={clearCart}
                className="text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider transition-all cursor-pointer"
              >
                Clear Cart
              </button>
            </div>

            <div className="space-y-4">
              {cart.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 rounded-2xl shadow-md hover:border-[var(--accent-blue)]/50 transition-all"
                >
                  <div 
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex items-center gap-4 cursor-pointer group flex-1"
                  >
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl group-hover:scale-105 transition-transform" />
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-blue)] transition-colors">{item.name}</h3>
                      <p className="text-xs font-black text-[var(--accent-blue)]">{item.price}</p>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart && removeFromCart(item.id);
                    }}
                    className="p-2.5 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all cursor-pointer"
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 rounded-3xl flex items-center justify-between shadow-xl">
              <div>
                <p className="text-xs text-[var(--text-muted)] uppercase">Total Amount</p>
                <h2 className="text-2xl font-black text-[var(--text-heading)]">Rs. {totalAmount}</h2>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={loading || !user}
                className={`px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 transition-all ${
                  !user 
                    ? 'bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed opacity-75' 
                    : 'bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white cursor-pointer'
                }`}
              >
                {loading ? (
                  'Processing...'
                ) : !user ? (
                  <>Sign In Required <LockOutlined /></>
                ) : (
                  <>Proceed to Checkout <ArrowRightOutlined /></>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}