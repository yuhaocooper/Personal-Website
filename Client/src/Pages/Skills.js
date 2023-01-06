import React, {useState, useEffect} from 'react';
import Header, { Footer } from '../Components/Navbar.js';
import DescriptiveCards from '../Components/DescriptiveCards.js';

function Skills() {

    const [index, setIndex] = useState(0)
    
    //content that is passed to DescriptiveCards.js based on state on this page
    const content = [
        {
            title: "JAVASCRIPT",
            description: "I am capable of building both scripts and full end-to-end web applications with it \n\n Built multiple business operations Google Apps Scripts, and built this website on a MERN stack.",
            cardName: "javascript"
        },
        {
            title: "REACT",
            description: "This website's frontend is built on React. \n\n I build scalable and reusable components that be reused throughout an app to minimize complexity and reduce future development time.",
            cardName: "react"
        },
        {
            title: "PROJECT MANAGEMENT",
            description: "PMP certified. \n\n I work closely with both stakeholders and development team to understand, build and test product value in iterative cycles so that we're able to complete projects that are on-time, within budget and valuable",
            cardName: "project-management"
        },
        {
            title: "HTML/CSS",
            description: "Built easily identifiable css classes for scalability, and used both to create interactive and well-designed webpages",
            cardName: "htmlcss"
        },
        {
            title: "AGILE",
            description: "A Scrum Master by experience. \n\n Focused on delivering value in short interative cycles by adjusting agile principles and WoWs to a team's capabilities and culture instead of the other way around. \n\n I work closely with the Product Owner, dev team, and all level of stakeholders.",
            cardName: "agile"
        },
        {
            title: "PM TOOLS",
            description: "Skilled in using all PM tools such as Jira, Confluence, Monday.com, Asana and ClickUp to manage projects and team collaboration. \n\n ClickUp is my current personal choice for personal work.",
            cardName: "pm-tools"
        },
        {
            title: "API",
            description: "Experienced in understanding and connecting to all types of APIs to extend services or product functionality. \n\n Capable of working with REST, GraphQL and SOAP API protocols or language.",
            cardName: "api"
        }
    ]

    //display of button based on current state
    const [displayBtn, setDisplayBtn] = useState({
        javascript: "none",
        react: "",
        projectmanagement: "",
        htmlcss: "",
        agile: "",
        pmtools: "",
        api: ""
    })

    function handleOnClick(props){
        setIndex(props);
    };

    //effect to hide the btn for the current page based on the index
    useEffect(()=>{
        switch(index){
            case(0):
                setDisplayBtn({
                    javascript: "none",
                    react: "",
                    projectmanagement: "",
                    htmlcss: "",
                    agile: "",
                    pmtools: "",
                    api: ""
                })
                break;
            case(1):
                setDisplayBtn({
                    javascript: "",
                    react: "none",
                    projectmanagement: "",
                    htmlcss: "",
                    agile: "",
                    pmtools: "",
                    api: ""
                })
                break;
            case(2):
                setDisplayBtn({
                    javascript: "",
                    react: "",
                    projectmanagement: "none",
                    htmlcss: "",
                    agile: "",
                    pmtools: "",
                    api: ""
                })
                break;
            case(3):
                setDisplayBtn({
                    javascript: "",
                    react: "",
                    projectmanagement: "",
                    htmlcss: "none",
                    agile: "",
                    pmtools: "",
                    api: ""
                })
                break;
            case(4):
                setDisplayBtn({
                    javascript: "",
                    react: "",
                    projectmanagement: "",
                    htmlcss: "",
                    agile: "none",
                    pmtools: "",
                    api: ""
                })
                break;
            case(5):
                setDisplayBtn({
                    javascript: "",
                    react: "",
                    projectmanagement: "",
                    htmlcss: "",
                    agile: "",
                    pmtools: "none",
                    api: ""
                })
                break;
            case(6):
                setDisplayBtn({
                    javascript: "",
                    react: "",
                    projectmanagement: "",
                    htmlcss: "",
                    agile: "",
                    pmtools: "",
                    api: "none"
                })
                break;
        }
    },[index])

    return (
        <div id='grid-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                <DescriptiveCards title={content[index].title} description={content[index].description} cardName={content[index].cardName}></DescriptiveCards>
                <div className="description-grid-3">
                    <div className="skills-btn-javascript" onClick={()=> handleOnClick(0)} style={{display: displayBtn.javascript}}></div>
                    <div className="skills-btn-react" onClick={()=> handleOnClick(1)} style={{display: displayBtn.react}}></div>
                    <div className="skills-btn-project-management" onClick={()=> handleOnClick(2)} style={{display: displayBtn.projectmanagement}}></div>
                    <div className="skills-btn-htmlcss" onClick={()=> handleOnClick(3)} style={{display: displayBtn.htmlcss}}></div>
                    <div className="skills-btn-agile" onClick={()=> handleOnClick(4)} style={{display: displayBtn.agile}}></div>
                    <div className="skills-btn-pm-tools" onClick={()=> handleOnClick(5)} style={{display: displayBtn.pmtools}}></div>
                    <div className="skills-btn-api" onClick={()=> handleOnClick(6)} style={{display: displayBtn.api}}></div>
                </div>
            </div>
            <div className='footer-container'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Skills