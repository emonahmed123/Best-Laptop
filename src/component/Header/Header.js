import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
               <nav>
                     <Link to="/home">HOME</Link>   
                    <Link to= "/review">REVIEW</Link>
                    <Link  to="/dashboard"> DASHBOARD</Link>
                     <Link to="/blog">BLOG</Link>
                    <Link to="/about">ABOUT</Link>
                
               </nav>


        </div>
    );
};

export default Header;