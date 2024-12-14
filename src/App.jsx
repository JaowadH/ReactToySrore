import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCartProvider } from './components/khoa/ShoppingCartContext';
import Home from './components/cody/Home'; // Import the Home component
import ProductList from './components/khoa/ProductList';
import ProductDetails from './components/khoa/ProductDetails';
import ShoppingCart from './components/khoa/ShoppingCart';
import About from './components/jaowad/About'; // Import the About component
import Contact from './components/jaowad/Contact'; // Import the Contact component
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ShoppingCartProvider>
      <Router>
        <div className="App">
          {/* Header */}
          <header className="header">
            <div className="logo">JCCK</div>
            <nav className="nav">
              <Link to="/" className="navLink">Home</Link>
              <Link to="/products" className="navLink">Products</Link>
              <Link to="/about" className="navLink">About</Link>
              <Link to="/contact" className="navLink">Contact</Link>
            </nav>
          </header>

          {/* Search Bar */}
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/about" element={<About />} /> {/* About route */}
            <Route path="/contact" element={<Contact />} /> {/* Contact route */}
            <Route path="/products" element={<ProductList searchTerm={searchTerm} />} /> {/* Product List route */}
            <Route path="/products/:id" element={<ProductDetails />} /> {/* Product Details route */}
            <Route path="/cart" element={<ShoppingCart />} /> {/* Shopping Cart route */}
          </Routes>

          {/* Footer */}
          <footer className="footer">
            <div>
              <a href="#!" className="footerLink">Facebook</a> |
              <a href="#!" className="footerLink">Instagram</a> |
              <a href="#!" className="footerLink">LinkedIn</a>
            </div>
            <div>Email: jcck@gmail.com | Phone: (709) 123-5555</div>
          </footer>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
