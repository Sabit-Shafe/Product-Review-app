import React from 'react'
// import { Link } from 'react-router-dom';
import './Header.css';


export const Header = () => {
  return (
    <div>
        <nav className='header'>
            <h3>Product Review</h3>
            <div>
                <a href="/">Home</a>
                <a href="/reviews">Reviews</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">about</a>
            </div>
        </nav>
    </div>
  )
}
export default Header
