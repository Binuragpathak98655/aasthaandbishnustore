import { useState } from 'react';

export default function Header({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <i className="fas fa-shopping-basket"></i>
          Aastha & Bishnu Store
        </a>
        <nav className={`nav${menuOpen ? ' active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a></li>
            <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollTo('products'); }}>Products</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <a href="#" className="cart-btn" onClick={(e) => { e.preventDefault(); onCartClick(); }}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
