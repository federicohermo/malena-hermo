// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Optional: add custom styles for the component

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/proyectos">Go back to Projects <span className='nav-arrow'>-<i className='arrow right'></i></span></Link>
        </div>
    );
};

export default NotFound;
