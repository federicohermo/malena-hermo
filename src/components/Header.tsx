// components/Header.tsx
import React, { useState } from "react";
import Menu from './Menu';
import '../styles/Header.css';

interface HeaderProps {
    display?: boolean,
}

const Header: React.FC<HeaderProps> = ({ display }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${display ? 'transparent' : ''}`}>
      <div
        className="logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="/">
        <span className={`expand-text ${isHovered ? 'hovered' : ''}`}>
          <span className="letter M">M</span>
          <span className="letter-rest malena">alena</span>
          <span className="letter H">H</span>
          <span className="letter-rest hermo">ermo</span>
        </span>
        </a>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
      </div>
      <Menu isOpen={isOpen} />
    </header>
  );
};

export default Header;
