import React from "react";
import Header, { Footer } from '../Components/Navbar.js';
import pdf from './../images/pdf/resume.pdf'

function Resume(){

    return (
        <div id='resume-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                <iframe src={pdf} style={{height: '500px', width: '100%', maxWidth: '1000px'}} title="Resume"></iframe>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Resume