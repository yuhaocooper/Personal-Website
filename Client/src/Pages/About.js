import React, { useEffect, useState } from 'react';
import Header, {Footer} from '../Components/Navbar'
import DescriptiveCards from '../Components/DescriptiveCards'
import Slide from '../Components/Slide';

function About(){
    const [index, setIndex] = useState(1)
    const [displayBtn, setDisplayBtn] = useState({
        me: "none",
        website: "",
        interests: ""
    })

    //Props for slide
    var running = <div className="slide-display-item-running" ></div>
    var music = <div className="slide-display-item-music" ></div>
    var basketball = <div className="slide-display-item-basketball" ></div>
    var steak = <div className="slide-display-item-steak" ></div>
    var travel = <div className="slide-display-item-travel" ></div>
    var walking = <div className="slide-display-item-walking"></div>
    const list = [running,music, basketball, steak, travel, walking]
    const subtitlelist = ['SERIOUS HOBBY JOGGER','ECLECTIC TASTE','BASKETBALL IS LIFE','MEDIUM RARE STEAK','TRAVELLING', "LONG WALKS"]

    //Props for descriptiveCard
    const content = [
        {}, //trick so that I can use the index state to set ternary condition for the descriptive and slide functions
        {
        title: "YUHAO", 
        description: <div>Hi, I am a <b>BUILDER.</b><br></br><br></br>I specialize in being the conduit between the different teams in agile product development with a mix of programming, product, project management and business operations skills.<br></br><br></br> I am currently looking for a <b>NEW</b> opportunity. Do reach out if you are looking for a builder who can increase the <b>value</b> of your product development or operations.</div>,
        cardName: 'profile'
        },
        {
        title: "Website",
        description: <div>This website is hosted on AWS lightsail. <br></br><br></br> It is built with a MERN stack. <br></br><br></br>The domain is owned by me, and is currently hosted by Google Domains. <br></br><br></br>You may find the code for it through my Github repo below.</div>,
        cardName: 'website'
        },
];

    //set state of index as we change 'pages'
    function handleOnClick(props){
        setIndex(props);
    };

    //effect to hide the btn for the current page based on the index
    useEffect(()=>{
        if (index === 1){
            setDisplayBtn({
                me: "none",
                website: "",
                interests: ""
            })
            window.scrollTo(0, 0)
        }
        else if (index === 2){
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
        <div id='about-container' style={{backgroundColor: '#E39EB6'}}>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                {index ? <DescriptiveCards title={content[index].title} description={content[index].description} cardName={content[index].cardName}></DescriptiveCards> : <Slide list={list} subtitlelist={subtitlelist}></Slide>}
                <div className="description-grid-3">
                    <div className="about-btn-me" onClick={()=> handleOnClick(1)} style={{display: displayBtn.me}}></div>
                    <div className="about-btn-website" onClick={()=> handleOnClick(2)} style={{display: displayBtn.website}}></div>
                    <div className="about-btn-interests" onClick={()=> handleOnClick(false)} style={{display: displayBtn.interests}}></div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default About;
