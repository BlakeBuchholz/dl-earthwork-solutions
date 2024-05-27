import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          console.log(offset);
          if (offset > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
  
    return (
      <header className={`header ${isScrolled ? 'solid' : 'transparent'}`}>
        <nav>
          <ul>
            <li><Link to="/#home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
