import React, { useEffect, useState } from 'react';
import Header, {Footer} from '../Components/Navbar'
import Slide from '../Components/Slide'
import DescriptiveCards from '../Components/DescriptiveCards';

function About(){

    return(
        <div id='grid-container'>
        <div>
            <Header></Header>
        </div>
        <div id='main-body'>
            <DescriptiveCards></DescriptiveCards>
        </div>
        <div className='footer-container '>
            <Footer></Footer>
        </div>
    </div>
    )
}

export default About;
