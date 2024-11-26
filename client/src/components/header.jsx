import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
  const [setShowAuthModal] = useState(false);

  const toggleAuthModal = () => {
    setShowAuthModal((prev) => !prev);
  };

  return (
    <header className="main-header">
      <div className="container-header">
        {/* Logo */}
        <Link to="/" className="logo">
          
          <span className="site-name">Logo APP</span>
        </Link>

        {/* Toggle para menú responsive va en una cajita*/}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰ {/* Carácter Unicode para un ícono tipo "hamburguesa" */}
        </label>

        {/* Menú de navegación */}
        <nav className="main-navbar">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/appManager">App</Link></li>
            <li><Link to="/Auth">Login</Link></li>
            <li>
              <button className="login-btn" onClick={toggleAuthModal}>👤
                
              </button>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;