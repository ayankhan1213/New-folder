import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Agar Shop ya Profile pages hain toh unko bhi yahan import kar sakte ho

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-body)] font-sans">
      <Navbar />
      
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          
          {/* Protected Routes placeholder */}
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;