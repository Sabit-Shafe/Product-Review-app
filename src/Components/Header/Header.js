import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';


export const Header = () => {
  return (
    <div>
        <nav className='header'>
            <h3>Product Review</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">about</Link>
            </div>
        </nav>
    </div>
  )
}
export default Header
