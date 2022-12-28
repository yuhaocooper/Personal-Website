import React from "react";
import { Link } from 'react-router-dom';


function Header(){
  return (
    <header>
      <nav>
        <Link to="/">HOME</Link>|
        <Link to="/about">ABOUT</Link>|
        <Link to="/second">BLOG</Link>|
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  )
}

export function Footer(){
  return(
    <footer>
      <nav>
        <a className='image' href="https://medium.com/@yuhaocooper"></a>
      </nav>
    </footer>
  )
}

export default Header;
