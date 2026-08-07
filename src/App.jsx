import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Legacy from './pages/Legacy';
import BestSellers from './pages/BestSellers';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] font-sans">
          <Navbar />
          
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/legacy" element={<Legacy />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/cart" element={<Cart />} />
              
              {/* Agar koi /login khole ya ghalti se jaye toh home par redirect ho jaye */}
              <Route path="/login" element={<Navigate to="/" replace />} />
              
              {/* Catch-all route for any invalid URL */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;