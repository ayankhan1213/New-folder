import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, LogOut, Mail, Lock, ArrowRight, ChevronDown, Sparkles, Flame, Crown, Compass } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Dropdown, Avatar, message } from 'antd';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const { cart = [] } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        message.success("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        message.success("Logged in successfully!");
      }
      setIsModalOpen(false);
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userMenuItems = [
    {
      key: '1',
      label: <Link to="/profile" className="font-medium text-zinc-200">My Profile</Link>,
      icon: <User size={16} className="text-sky-400" />,
    },
    {
      key: '2',
      label: <span onClick={logoutUser} className="font-medium text-red-400">Logout</span>,
      icon: <LogOut size={16} className="text-red-400" />,
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="group flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-[0.25em] text-zinc-100 group-hover:text-sky-400 transition-colors">
              MYC
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-sky-500 -mt-1">
              Perfumes Luxury
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Link to="/" className="hover:text-zinc-100 transition-colors relative py-2">Home</Link>
            
            {/* State-controlled Mega Menu for Shop */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link to="/shop" className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors">
                Shop Collections <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Box */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px] z-50">
                  <div className="bg-zinc-900/95 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-6 shadow-2xl grid grid-cols-2 gap-4">
                    
                    {/* Left Categories Grid */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-extrabold tracking-widest text-sky-400 px-3 py-1 bg-sky-500/10 rounded-lg flex items-center gap-1.5 mb-3">
                        <Crown size={13} /> Exclusive Lines
                      </div>
                      
                      <Link 
                        to="/shop?category=Oud%20%26%20Woody" 
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="p-3 rounded-2xl hover:bg-zinc-800/80 text-zinc-300 hover:text-sky-400 transition-all flex items-start gap-3 group/item cursor-pointer block"
                      >
                        <div className="p-2 bg-zinc-800 rounded-xl group-hover/item:bg-sky-500/20 text-sky-400 transition-colors">
                          <Flame size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-100 group-hover/item:text-sky-400">Royal Oud & Woody</div>
                          <div className="text-[10px] text-zinc-500 normal-case font-normal mt-0.5">Deep, smoky and long-lasting oriental notes.</div>
                        </div>
                      </Link>

                      <Link 
                        to="/shop?category=Men%27s%20Signature" 
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="p-3 rounded-2xl hover:bg-zinc-800/80 text-zinc-300 hover:text-sky-400 transition-all flex items-start gap-3 group/item cursor-pointer block"
                      >
                        <div className="p-2 bg-zinc-800 rounded-xl group-hover/item:bg-sky-500/20 text-sky-400 transition-colors">
                          <Compass size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-100 group-hover/item:text-sky-400">Men's Signature</div>
                          <div className="text-[10px] text-zinc-500 normal-case font-normal mt-0.5">Bold, masculine and charismatic fragrances.</div>
                        </div>
                      </Link>
                    </div>

                    <div className="space-y-2 pt-8">
                      <Link 
                        to="/shop?category=Women%27s%20Elegance" 
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="p-3 rounded-2xl hover:bg-zinc-800/80 text-zinc-300 hover:text-sky-400 transition-all flex items-start gap-3 group/item cursor-pointer block"
                      >
                        <div className="p-2 bg-zinc-800 rounded-xl group-hover/item:bg-sky-500/20 text-sky-400 transition-colors">
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-100 group-hover/item:text-sky-400">Women's Elegance</div>
                          <div className="text-[10px] text-zinc-500 normal-case font-normal mt-0.5">Floral, sweet and mesmerizing luxury blends.</div>
                        </div>
                      </Link>

                      <Link 
                        to="/shop?category=Unisex%20Luxury" 
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="p-3 rounded-2xl hover:bg-zinc-800/80 text-zinc-300 hover:text-sky-400 transition-all flex items-start gap-3 group/item cursor-pointer block"
                      >
                        <div className="p-2 bg-zinc-800 rounded-xl group-hover/item:bg-sky-500/20 text-sky-400 transition-colors">
                          <Crown size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-100 group-hover/item:text-sky-400">Unisex Luxury</div>
                          <div className="text-[10px] text-zinc-500 normal-case font-normal mt-0.5">Versatile modern scents crafted for everyone.</div>
                        </div>
                      </Link>
                    </div>

                    {/* Bottom Banner inside Mega Menu */}
                    <div className="col-span-2 mt-2 pt-4 border-t border-zinc-800 flex items-center justify-between px-2">
                      <span className="text-[11px] text-zinc-400 font-medium">Looking for custom gift boxes?</span>
                      <Link to="/shop" onClick={() => setIsMegaMenuOpen(false)} className="text-xs text-sky-400 font-bold hover:underline flex items-center gap-1">
                        View Gift Sets <ArrowRight size={12} />
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link to="/bestSellers" className="hover:text-zinc-100 transition-colors relative py-2">Best Sellers</Link>
            <Link to="/legacy" className="hover:text-zinc-100 transition-colors relative py-2">Legacy</Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5">
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2.5 bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/50 rounded-2xl text-zinc-300 hover:text-sky-400 transition-all shadow-inner">
              <ShoppingBag size={18} />
              <span className="absolute -top-1.5 -right-1.5 bg-sky-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {cart.length}
              </span>
            </Link>

            {/* User Profile or Sign In Button */}
            {user ? (
              <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement="bottomRight">
                <div className="flex items-center gap-3 cursor-pointer p-1.5 bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/50 rounded-2xl transition-all">
                  <Avatar 
                    src={user.photoURL} 
                    icon={!user.photoURL && <User size={14} />} 
                    className="bg-sky-600 text-white font-bold"
                  />
                  <span className="hidden lg:block text-xs font-bold text-zinc-200 pr-2">
                    {user.displayName || user.email?.split('@')[0]}
                  </span>
                </div>
              </Dropdown>
            ) : (
              <button 
                onClick={() => { setIsSignup(false); setIsModalOpen(true); }}
                className="px-5 py-2.5 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-bold uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-sky-900/20 active:scale-95 cursor-pointer"
              >
                Sign In
              </button>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-6 space-y-4">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-sky-400"
            >
              Home
            </Link>
            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">Shop Categories</div>
              <Link 
                to="/shop?category=Oud%20%26%20Woody" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block pl-3 text-xs text-zinc-400 hover:text-sky-400 py-1"
              >
                Royal Oud & Woody
              </Link>
              <Link 
                to="/shop?category=Men%27s%20Signature" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block pl-3 text-xs text-zinc-400 hover:text-sky-400 py-1"
              >
                Men's Signature
              </Link>
              <Link 
                to="/shop?category=Women%27s%20Elegance" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block pl-3 text-xs text-zinc-400 hover:text-sky-400 py-1"
              >
                Women's Elegance
              </Link>
              <Link 
                to="/shop?category=Unisex%20Luxury" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block pl-3 text-xs text-zinc-400 hover:text-sky-400 py-1"
              >
                Unisex Luxury
              </Link>
            </div>
            <Link 
              to="/shop" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-sky-400 pt-2 border-t border-zinc-800"
            >
              View All Shop
            </Link>
          </div>
        )}
      </nav>

      {/* POPUP MODAL FOR LOGIN / SIGNUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl relative">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 bg-zinc-800/50 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                {isSignup ? 'New Membership' : 'Secure Access'}
              </span>
              <h2 className="text-2xl font-black text-zinc-100 uppercase tracking-wider mt-3">
                {isSignup ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                {isSignup ? 'Join MYC Perfumes luxury experience.' : 'Sign in to manage your luxury cart.'}
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isSignup && (
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-100 focus:border-sky-500 outline-none"
                    placeholder="Enter your Name"
                  />
                </div>
              )}

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 text-zinc-500" size={16} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-xs text-zinc-100 focus:border-sky-500 outline-none"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3 text-zinc-500" size={16} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-xs text-zinc-100 focus:border-sky-500 outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Processing...' : <>{isSignup ? 'Sign Up' : 'Sign In'} <ArrowRight size={14} /></>}
              </button>
            </form>

            <div className="text-center mt-6 text-xs text-zinc-400">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button 
                type="button" 
                onClick={() => setIsSignup(!isSignup)} 
                className="text-sky-400 font-bold hover:underline cursor-pointer ml-1"
              >
                {isSignup ? 'Sign In' : 'Create account'}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}