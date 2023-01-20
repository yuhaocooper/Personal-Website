import React, {useEffect, useState} from 'react';
import Header, { Footer } from '../Components/Navbar.js';

function Home (){

    //use count as the number logic to switch between texts
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [link, setLink] = useState("/about")
    
    //set interval to change count
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 3000);
        return () => {clearInterval(interval)};

    }, [])

    //based on count, change the variables for the Mainbody
    //Logic for title
    useEffect(()=>{
        if (count >4){
            setCount(0)
        } 
        switch(count){
            case (0):
                setTitle(<div className='title'><div>Welcome!</div><span>HI, I'M YUHAO</span></div>)
                break;
            case (1):
                setTitle(<div className='title'>ABOUT ME</div>)
                break;
            case (2):
                setTitle(<div className='title'>MY WORK</div>)
                break;
            case (3):
                setTitle(<div className='title'>SKILLS</div>)
                break;
            case (4):
                setTitle(<div className='title'>BLOG</div>)
                break;
            default:
                setTitle(<div className='title'><div>Welcome!</div><span>HI, I'M YUHAO</span></div>)
                break;
        }
    },[count])

    //Logic for subtitle
    useEffect(()=>{
        switch(count){
            case (0):
                setSubTitle()
                break;
            case (1):
                setSubTitle(<div className='sub-title'>A builder, leader and avid runner.</div>)
                break;
            case (2):
                setSubTitle(<div className='sub-title'>Delivering value in the digital age.</div>)
                break;
            case (3):
                setSubTitle(<div className='sub-title'>A little product, coding, project and agile.</div>)
                break;
            case (4):
                setSubTitle(<div className='sub-title'>Some of my thoughts captured on Medium.</div>)
                break;
            default:
                setSubTitle()
                break;
        }
    },[count])

    //Logic for link
    useEffect(()=>{
        switch(count){
            case (0):
                setLink("/about")
                break;
            case (1):
                setLink("/about")
                break;
            case (2):
                setLink("/work")
                break;
            case (3):
                setLink("/skills")
                break;
            default:
                setLink("/about")
                break;
        }
    },[count])


    return (
        <div id='home-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                {title}
                {subTitle}
                <div className='learn-more-btn'><a href={link}><img src={require('./../images/icons/Base-learn-more.svg').default} alt="learnmore" width="100%" height="100%"/></a></div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home