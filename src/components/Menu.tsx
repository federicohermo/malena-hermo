// components/Menu.tsx
import React from 'react';
import '../styles/Menu.css';

interface MenuProps {
    isOpen: boolean,
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`menu-overlay ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="menu-content">
          <ul className='main'>
            <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/escritos">Escritos</a></li>
          </ul>
          <ul className='networks'>
            <li><a href="https://www.instagram.com/meresundas/" target="_blank" rel="noreferrer">Instagram -<i className='arrow right'></i></a></li>
            <li><a href="https://www.linkedin.com/in/malena-hermo-fandi%C3%B1o-b3b992231/" target="_blank" rel="noreferrer">LinkedIn -<i className='arrow right'></i></a></li>
            <li><a href="https://www.behance.net/malenahermo" target="_blank" rel="noreferrer">Behance -<i className='arrow right'></i></a></li>
          </ul>
        </div>
    </div>
  );
};

export default Menu;
