// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Optional: add custom styles for the component

interface NotFoundProps {
    route: string
}

const NotFound: React.FC<NotFoundProps> = ({ route }) => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Disculpanos, la página que estás buscando no existe.</p>
            <Link to={`/${route}`}>Volvé →</Link>
        </div>
    );
};

export default NotFound;
