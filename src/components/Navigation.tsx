// components/Navigation.tsx
import React from "react";
import '../styles/Navigation.css';

// Defining an array of category strings
const categories: string[] = [
  "Proyectos", "Prácticas", "Exhibiciones", "Escritos", 
  "Charlas", "Sustentabilidad", "Interiores", 
  "Objetos", "Espacios Artísticos", "Cultural", "Hospitales", "..."
];

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      {categories.map((category, index) => (
        <button key={index} className="nav-button"><a href={`/${category.toLowerCase()}`}>{category}</a></button>
      ))}
    </nav>
  );
};

export default Navigation;
