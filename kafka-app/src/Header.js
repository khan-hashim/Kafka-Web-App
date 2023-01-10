import React from 'react';
import { Link } from 'react-router-dom';
import './Bootstrap/bootstrap.min.css';
import './Header.css';

function Header(){
    return <div>
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          
            <Link to="/" className="py-2 d-none d-md-inline-block">HOME</Link>
          
            <Link to="/headphones" className="py-2 d-none d-md-inline-block">HEADPHONES</Link>
          
          
            <Link to="/smartwatches" className="py-2 d-none d-md-inline-block">SMARTWATCHES</Link>
          
         
            <Link to="/powerbanks" className="py-2 d-none d-md-inline-block">POWERBANKS</Link>
         
            <Link to="/" className="py-2 d-none d-md-inline-block">CONTACT</Link>
          
            <Link to="/cart" className="py-2 d-none d-md-inline-block">CART</Link>
          
        </div>
      </nav>
  
    </div>;
  }

  export default Header;  