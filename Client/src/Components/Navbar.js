import React from "react";
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <header>
      <nav className="header" style={{visibility: props.visibility}}>
        <Link to="/home">HOME</Link>|
        <Link to="/skills">SKILLS</Link>|
        <Link to="/contact">CONTACT {props.visibility}</Link>
      </nav>
    </header>
  )
}

export function Footer(props){
  return(
    <footer>
      <nav className="footer" style={{visibility: props.visibility}}>
        <a className='icon-linkedin' href="https://www.linkedin.com/in/yuhaocooper/"></a>
        <a className='icon-github' href="https://github.com/yuhaocooper"></a>
        <a className='icon-medium' href="https://medium.com/@yuhaocooper"></a>
      </nav>
    </footer>
  )
}

export default Header;