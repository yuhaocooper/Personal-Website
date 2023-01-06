import React from "react";
import Header, { Footer } from '../Components/Navbar.js';
import pdf from './../images/pdf/resume.pdf'

function Resume(){

    return (
        <div id='grid-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                <iframe src={pdf} style={{height: '500px', width: '600px'}}></iframe>
            </div>
            <div className='footer-container'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Resume