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
        description: <div>I am passionate about shipping products and delivering value to the end target users through digital technologies. <br></br><br></br> I believe such endeavours require a team to execute on it, so I specialize in building and working with teams on agile product development.<br></br><br></br> I am currently looking for a new opportunity, with an ideal role as a <b>Scrum Master</b> or a <b>Project Manager</b>, but I am open to exploring a <b>Product</b> or <b>Implementation</b> role too. Do reach out if you're interested!  </div>,
        cardName: 'profile'
        },
        {
        title: "Website",
        description: "This website is hosted on AWS lightsail. \n\nIt is built on MERN stack. \n\nThe domain is owned by me, and is currently hosted by Google Domains. \n\nYou may find the code for it through my Github repo below",
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
        <div id='about-container' style={{backgroundColor: '#E39EB6'}}>
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
