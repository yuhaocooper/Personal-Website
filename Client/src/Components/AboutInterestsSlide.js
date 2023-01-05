import React, { useState, useEffect, useRef } from "react";

function AboutInterestsSlide(props){
    var running = <div className="slide-display-item-running" ></div>
    var music = <div className="slide-display-item-music" ></div>
    var basketball = <div className="slide-display-item-basketball" ></div>
    var steak = <div className="slide-display-item-steak" ></div>
    var travel = <div className="slide-display-item-travel" ></div>
    var walking = <div className="slide-display-item-walking"></div>
    const list = [running,music, basketball, steak, travel, walking]
    const subtitlelist = ['SERIOUS HOBBY JOGGER','MUSIC IS LIFE','HAD NBA DREAMS','LOVE A GOOD STEAK','TRAVELLING', "LONG WALKS"]
    const intervalTime = 2000

    const intervalRef = useRef(null)
    const [count, setCount] = useState(0)
    const [item1id, setItem1id] = useState(0)
    const [item2id, setItem2id] = useState(1)
    const [item3id, setItem3id] = useState(2)
    const [item4id, setItem4id] = useState(3)
    const [item5id, setItem5id] = useState(4)
    const [item1, setItem1] = useState(list[item1id])
    const [item2, setItem2] = useState(list[item2id])
    const [item3, setItem3] = useState(list[item3id])
    const [item4, setItem4] = useState(list[item4id])
    const [item5, setItem5] = useState(list[item5id])
    const [subtitle, setSubtitle] = useState(list.length-1)

    //set interval to change count
    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
            setItem1id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem2id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem3id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem4id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem5id(prevCount => (prevCount + list.length - 1)%list.length)
        }, intervalTime);
        return () => {clearInterval(intervalRef.current)};
    }, [])

    useEffect(()=>{
        setItem1(list[item1id])
        setItem2(list[item2id])
        setItem3(list[item3id])
        setItem4(list[item4id])
        setItem5(list[item5id])
        setSubtitle(subtitlelist[item3id])
    },[count])
    
    function resetTimer() {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
            setItem1id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem2id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem3id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem4id(prevCount => (prevCount + list.length - 1)%list.length)
            setItem5id(prevCount => (prevCount + list.length - 1)%list.length)
        }, intervalTime);
    }

    return (
        <div className="slide-container">
            <div className="slide-close"><a href="/" className="slide-close-a"></a></div>
            <div className="slide-display">
                <div className="slide-display-item-first">{item1}</div>
                <div className="slide-display-item">{item2}</div>
                <div className="slide-display-item">{item3}</div>
                <div className="slide-display-item">{item4}</div>
                <div className="slide-display-item-last">{item5}</div>
            </div>
            <div className="slide-statement">
                <div>{subtitle}</div>
            </div>
        </div>
    )
}

export default AboutInterestsSlide;