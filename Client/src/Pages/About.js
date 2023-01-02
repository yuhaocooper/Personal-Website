import React, { useEffect, useState } from 'react';
import Header, {Footer} from '../Components/Navbar'

function About(){

    return(
        <div id='grid-container'>
        <div>
            <Header></Header>
        </div>
        <div>
            <h1>About Page</h1>
        </div>
        <div className='footer-container '>
            <Footer></Footer>
        </div>
    </div>
    )
}

export default About;
