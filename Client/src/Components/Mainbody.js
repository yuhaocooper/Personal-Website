import React, { useEffect, useState } from 'react';

function Mainbody(){

    //use count as the number logic to switch between texts
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [link, setLink] = useState("/about")
    const list = [0,1,2,3]
    
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
        if (count >3){
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
        }
    },[count])

    //return the value
    // I need to split the png file into 2 separate layers at home
    return(
        <div>
            {title}
            {subTitle}
            <div><a href={link} className='testbutton'></a></div>
        </div>
    )
}

export default Mainbody