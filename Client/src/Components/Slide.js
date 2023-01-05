import React, { useState, useEffect, useRef } from "react";

//import BG images
import one from '../images/icons/letter-a-128x128-4078306.png'
import two from '../images/icons/alphabet-b-128x128-4078265.png'
import three from '../images/icons/letter-c-128x128-4078266.png'
import four from '../images/icons/letter-d-128x128-4078267.png'
import five from '../images/icons/letter-d-128x128-4078267.png'

function Slide(props){
    var div1 = <div className="slide-display-item" style={{backgroundImage: `url(${one})`}}></div>
    var div2 = <div className="slide-display-item" style={{backgroundImage: `url(${two})`}}></div>
    var div3 = <div className="slide-display-item" style={{backgroundImage: `url(${three})`}}></div>
    var div4 = <div className="slide-display-item" style={{backgroundImage: `url(${four})`}}></div>
    var div5 = <div className="slide-display-item" style={{backgroundImage: `url(${five})`}}></div>
    const list = [div1,div2,div3,div4,div5]
    const subtitlelist = ['s1','s2','s3','s4','s5']
    const intervalTime = 1000

    const intervalRef = useRef(null)
    const [count, setCount] = useState(0)
    const [item1, setItem1] = useState(list[0])
    const [item2, setItem2] = useState(list[1])
    const [item3, setItem3] = useState(list[2])
    const [item4, setItem4] = useState(list[3])
    const [item5, setItem5] = useState(list[4])
    const [subtitle, setSubtitle] = useState(subtitlelist[2])

    //set interval to change count
    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, intervalTime);
        return () => {clearInterval(intervalRef.current)};
    }, [])

    function resetTimer() {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, intervalTime);
    }

    //logic to always center the main index item, then the rest are arranged accordingly, and I can apply css to blur or fade them
    //Use the same count trick
    //Props to be passed in from the main component? There's quite a few variables, may not be a good idea, may be easier just to copy the code in the separate pages that require this
    //I need to display odd-number items so that the middle item is centered on the screen LOL
    //The items are fixed, what I need to program is the order and where they are displayed on the screen

    //switch logic for items and subtitle
    useEffect(()=>{
        if (count==5){
            setCount(0)
        }
        console.log(count)
        switch(count){
            case(0):
                setItem1(list[0])
                setItem2(list[1])
                setItem3(list[2])
                setItem4(list[3])
                setItem5(list[4])
                setSubtitle(subtitlelist[2])
            break;
            case(1):
                setItem1(list[4])
                setItem2(list[0])
                setItem3(list[1])
                setItem4(list[2])
                setItem5(list[3])
                setSubtitle(subtitlelist[1])
            break;
            case(2):
                setItem1(list[3])
                setItem2(list[4])
                setItem3(list[0])
                setItem4(list[1])
                setItem5(list[2])
                setSubtitle(subtitlelist[0])
            break;
            case(3):
                setItem1(list[2])
                setItem2(list[3])
                setItem3(list[4])
                setItem4(list[0])
                setItem5(list[1])
                setSubtitle(subtitlelist[4])
            break;
            case(4):
                setItem1(list[1])
                setItem2(list[2])
                setItem3(list[3])
                setItem4(list[4])
                setItem5(list[0])
                setSubtitle(subtitlelist[3])
            break;
        }
    },[count]);

    //effect for nav button
    useEffect(()=>{

    });

    return (
        <div className="slide-container">
            <div className="slide-close"><a href="/" className="slide-close-a"></a></div>
            <div className="slide-display">
                {item1}
                {item2}
                {item3}
                {item4}
                {item5}
            </div>
            <div className="slide-statement">
                {subtitle}
            </div>
            <div className="slide-nav">
                <div className="slide-nav-btn" onClick={resetTimer}>previous</div>
                <div className="slide-nav-btn" onClick={resetTimer}>next</div>
            </div>
        </div>
    )
}

export default Slide;