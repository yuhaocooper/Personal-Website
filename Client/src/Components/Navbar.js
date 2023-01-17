import React from "react";
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <header>
      <nav className="header" style={{visibility: props.visibility}}>
        <Link to="/">HOME</Link>|
        <Link to="/about">ABOUT</Link>|
        <Link to="/work">WORK</Link>|
        <Link to="/skills">SKILLS</Link>|
        <Link to="/resume">RÉSUMÉ</Link>
      </nav>
    </header>
  )
}

export function Footer(props){
  return(
    <footer>
      <nav className="footer" style={{visibility: props.visibility}}>
        <a href="https://www.linkedin.com/in/yuhaocooper/"><img src={require('./../images/icons/linkedin.png')} alt="linkedin-icon" width="32px" height="32px"/></a>
        <a href="https://github.com/yuhaocooper"><img src={require('./../images/icons/github.png')} alt="github-icon" width="32px" height="32px"/></a>
        <a href="https://medium.com/@yuhaocooper"><img src={require('./../images/icons/medium.png')} alt="medium-icon" width="32px" height="32px"/></a>
      </nav>
    </footer>
  )
}

export default Header;
