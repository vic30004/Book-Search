import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav id="navBar">
            <div className="logo">
                <h4>Book Search</h4>
            </div>
            <ul className="nav-list">
                <li><a href="">Home</a></li>
                <li><a href="">Saved Books</a></li>
            </ul>
        </nav>
    )
}

export default Nav

