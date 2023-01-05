import React, { useEffect, useState } from 'react';
import Header, {Footer} from '../Components/Navbar'
import Slide from '../Components/Slide'
import AboutDescriptiveCards from '../Components/AboutDescriptiveCards'
import AboutInterestsSlide from '../Components/AboutInterestsSlide';

function About(){
    const [page, setPage] = useState('yuhao');
    const [index, setIndex] = useState(1)
    const [displayBtn, setDisplayBtn] = useState({
        me: "none",
        website: "",
        interests: ""
    })

    const [content, setContent] = useState([
        {}, //trick so that I can use the index state to set ternary condition for the descriptive and slide functions
        {
        title: "YUHAO", 
        description: "I am passionate about shipping products and delivering value to the end target users through digital technologies. \n\n I believe such endeavours require a team to execute on it, so I specialize in building and working with teams on agile product development.",
        cardName: 'profile'
        },
        {
        title: "Website",
        description: "This website is hosted on AWS lightsail. \n\nIt is built on MERN stack. \n\nThe domain is owned by me, and is currently hosted by Google Domains. \n\nYou may find the code for it through my Github repo below",
        cardName: 'website'
        },
]);

    function handleOnClick(props){
        setIndex(props);
    };

    return(
        <div id='grid-container'>
        <div>
            <Header></Header>
        </div>
        <div className='about-main-body'>
            {index ? <AboutDescriptiveCards title={content[index].title} description={content[index].description} cardName={content[index].cardName}></AboutDescriptiveCards> : <AboutInterestsSlide></AboutInterestsSlide>}
            <div className="description-grid-3">
                <div className="about-btn-me" onClick={()=> handleOnClick(1)} style={{display: displayBtn.me}}></div>
                <div className="about-btn-website" onClick={()=> handleOnClick(2)} style={{display: displayBtn.website}}></div>
                <div className="about-btn-interests" onClick={()=> handleOnClick(false)} style={{display: displayBtn.interests}}></div>
            </div>
        </div>
        <div className='footer-container'>
            <Footer></Footer>
        </div>
    </div>
    )
}

export default About;
