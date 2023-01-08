import React, { useEffect, useState } from 'react';
import Header, {Footer} from '../Components/Navbar'
import DescriptiveCards from '../Components/DescriptiveCards'
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
        description: <div>I am passionate about shipping products and delivering value to the end target users through digital technologies. <br></br><br></br> I believe such endeavours require a team to execute on it, so I specialize in building and working with teams on agile product development.<br></br><br></br> I am currently looking for a NEW opportunity. My ideal role would be as a <b>Scrum Master</b>, but I'm interested in pursuing <b>Project Manager</b>, <b>Product</b> or <b>Implementation</b> roles too. Do reach out if you think I'll be a right fit for your organization.</div>,
        cardName: 'profile'
        },
        {
        title: "Website",
        description: <div>This website is hosted on AWS lightsail. <br></br><br></br> It is built with a MERN stack. <br></br><br></br>The domain is owned by me, and is currently hosted by Google Domains. <br></br><br></br>You may find the code for it through my Github repo below.</div>,
        cardName: 'website'
        },
]);

    //set state of index as we change 'pages'
    function handleOnClick(props){
        setIndex(props);
    };

    //effect to hide the btn for the current page based on the index
    useEffect(()=>{
        if (index == 1){
            setDisplayBtn({
                me: "none",
                website: "",
                interests: ""
            })
            window.scrollTo(0, 0)
        }
        else if (index == 2){
            setDisplayBtn({
                me: "",
                website: "none",
                interests: ""
            })
            window.scrollTo(0, 0)
        }
        else{
            setDisplayBtn({
                me: "",
                website: "",
                interests: "none"
            })
            window.scrollTo(0, 0)
        }
    },[index])

    return(
        <div id='about-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                {index ? <DescriptiveCards title={content[index].title} description={content[index].description} cardName={content[index].cardName}></DescriptiveCards> : <AboutInterestsSlide></AboutInterestsSlide>}
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
