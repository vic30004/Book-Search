import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav id="navBar">
            <div className="logo">
                <h4>Book Search</h4>
            </div>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/saved-books">Saved Books</Link></li>
            </ul>
        </nav>
    )
}

export default Nav

