import React from "react";
import { Link } from 'react-router-dom';


function Header(){
  return (
    <header>
      <nav className="header">
        <Link to="/">HOME</Link>|
        <Link to="/about">ABOUT</Link>|
        <Link to="/blog">BLOG</Link>|
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  )
}

export function Footer(){
  return(
    <footer>
      <nav className="footer">
        <a className='icon-linkedin' href="https://www.linkedin.com/in/yuhaocooper/"></a>
        <a className='icon-github' href="https://github.com/yuhaocooper"></a>
        <a className='icon-medium' href="https://medium.com/@yuhaocooper"></a>
      </nav>
    </footer>
  )
}

export default Header;
