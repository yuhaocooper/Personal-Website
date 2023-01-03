import React, { useEffect, useState } from 'react';

function Mainbody(){

    //use count as the number logic to switch between texts
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const list = [0,1,2,3]
    
    //set interval to change count
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);
        return () => {clearInterval(interval)};

    }, [])

    //based on count, change the variables for the Mainbody
    useEffect(()=>{
        if (count >3){
            setCount(0)
        }
        switch(count){
            case (0):
                setTitle(<div className='title'><div>Welcome!</div><span>HI, I'M YUHAO</span></div>)
                break;
            case (1):
                setTitle(<div className='title'>ABOUT ME!</div>)
                break;
            case (2):
                setTitle(<div className='title'>MY WORK!</div>)
                break;
            case (3):
                setTitle(<div className='title'>SKILLS!</div>)
                break;
        }
    },[count])

    useEffect(()=>{
        if (count >3){
            setCount(0)
        }
        switch(count){
            case (0):
                setSubTitle(<div className='sub-title'>WELCOME SUBTITLE</div>)
                break;
            case (1):
                setSubTitle(<div className='sub-title'>ABOUT ME SUBTITLE</div>)
                break;
            case (2):
                setSubTitle(<div className='sub-title'>WORK SUBTITLE</div>)
                break;
            case (3):
                setSubTitle(<div className='sub-title'>SKILLS SUBTITLE</div>)
                break;
        }
    },[count])

    //return the value
    // I need to split the png file into 2 separate layers at home
    return(
        <div>
            {title}
            {subTitle}
            <div><a href="/about" className='testbutton'></a></div>
        </div>
    )
}

export default Mainbody