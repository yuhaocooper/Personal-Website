import React, {useState, useEffect} from 'react';
import Header, { Footer } from '../Components/Navbar.js';
import DescriptiveCards from '../Components/DescriptiveCards.js';

function Work() {

    const [index, setIndex] = useState(0)
    const content = [
        {
            title: "Pomelo",
            description: <div><b style={{fontSize: '1.25rem'}}>Scrum Master</b><br></br>2022<br></br><br></br> Led agile transformation in the company. Project and product involved integrations with other Direct Acquirers, Card Schemes, PCI compliance, and Issuers. <br></br><br></br> Works closely with squad to drive constant efficiency improvements and delivery of work to meet releases. <br></br><br></br> Coached teams and individuals to focus on value delivery and time-to-value.</div>,
            cardName: "pomelo"
        },
        {
            title: "CrescoData",
            description: <div><b style={{fontSize: '1.25rem'}}>Ecommerce Project Manager</b><br></br>2020-2022<br></br><br></br> Managed all eCommerce integration projects. Platforms include Shopify, Bigcommerce, eBay, Lazada, Shopee, Catch, MySale and etc.<br></br><br></br> Led the integration for one of Australia's largest shopping malls. <br></br><br></br> Implemented Hybird project management principles. <br></br><br></br> Actively involved in requirements gathering and technical discussion calls with clients.</div>,
            cardName: "crescodata"
        },
        {
            title: "Style Theory",
            description: <div> <b style={{fontSize: '1.25rem'}}>Logistics Lead</b><br></br>2018-2020<br></br><br></br> Built SG inhouse logistics service from scratch. Partnered with Ethoz Group to do so.<br></br><br></br> Directly managed a full fleet of drivers, supervisor and executive. <br></br><br></br> Launched secure unattended delivery service as a product feature to further reduce churn due to logistics issues.</div>,
            cardName: "styletheory"
        }
    ]
    const [displayBtn, setDisplayBtn] = useState({
        pomelo: "none",
        styletheory: "",
        crescodata: ""
    })

    function handleOnClick(props){
        setIndex(props);
    };

    //effect to hide the btn for the current page based on the index
    useEffect(()=>{
        if (index == 0){
            setDisplayBtn({
                pomelo: "none",
                crescodata: "",
                styletheory: ""
            })
        }
        else if (index == 1){
            setDisplayBtn({
                pomelo: "",
                crescodata: "none",
                styletheory: ""
            })
        }
        else{
            setDisplayBtn({
                pomelo: "",
                crescodata: "",
                styletheory: "none"
            })
        }
    },[index])

    return (
        <div id='grid-container' style={{backgroundColor: '#E39EB6'}}>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                <DescriptiveCards title={content[index].title} description={content[index].description} cardName={content[index].cardName}></DescriptiveCards>
                <div className="description-grid-3">
                    <div className="work-btn-pomelo" onClick={()=> handleOnClick(0)} style={{display: displayBtn.pomelo}}></div>
                    <div className="work-btn-crescodata" onClick={()=> handleOnClick(1)} style={{display: displayBtn.crescodata}}></div>
                    <div className="work-btn-styletheory" onClick={()=> handleOnClick(2)} style={{display: displayBtn.styletheory}}></div>
                </div>
            </div>
            <div className='footer-container'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Work