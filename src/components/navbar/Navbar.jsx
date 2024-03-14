import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Start</Link>
                </li>
                <li className="nav-item">
                    <Link to="/recipes">Rezepte</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about-us">Über uns</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
