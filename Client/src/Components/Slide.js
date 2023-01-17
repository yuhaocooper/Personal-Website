import React, { useState, useEffect, useRef } from "react";

function Slide(props){
    //Requires props for list and subtitlelist
    //List == An array with div item containing the background img of the items in 125x125 div.
    //subtitlelist == An array containing the subtitle of the respective list item in String

    const intervalTime = 2000

    const intervalRef = useRef(null)
    const [count, setCount] = useState(0)
    const [item1id, setItem1id] = useState(0)
    const [item2id, setItem2id] = useState(1)
    const [item3id, setItem3id] = useState(2)
    const [item4id, setItem4id] = useState(3)
    const [item5id, setItem5id] = useState(4)
    const [item1, setItem1] = useState(props.list[item1id])
    const [item2, setItem2] = useState(props.list[item2id])
    const [item3, setItem3] = useState(props.list[item3id])
    const [item4, setItem4] = useState(props.list[item4id])
    const [item5, setItem5] = useState(props.list[item5id])
    const [subtitle, setSubtitle] = useState(props.list.length-1)

    //set interval to change count
    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
            setItem1id(prevCount => (prevCount + props.list.length - 1)%props.list.length)
            setItem2id(prevCount => (prevCount + props.list.length - 1)%props.list.length)
            setItem3id(prevCount => (prevCount + props.list.length - 1)%props.list.length)
            setItem4id(prevCount => (prevCount + props.list.length - 1)%props.list.length)
            setItem5id(prevCount => (prevCount + props.list.length - 1)%props.list.length)
        }, intervalTime);
        return () => {clearInterval(intervalRef.current)};
        // list is a fixed value, and I don't need as a dependencies
        // eslint-disable-next-line 
    }, [])

    useEffect(()=>{
        setItem1(props.list[item1id])
        setItem2(props.list[item2id])
        setItem3(props.list[item3id])
        setItem4(props.list[item4id])
        setItem5(props.list[item5id])
        setSubtitle(props.subtitlelist[item3id])
        // itemids are a fixed values, and I don't need as a dependencies
        // eslint-disable-next-line
    },[count])
    
    /* Not required right now, as I don't have the functionality to click on the slide items
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
    */

    return (
        <div className="slide-container">
            <div className="slide-close"><a href="/"><img src="images/close.png" width="36px" height="36px" alt="close"/></a></div>
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

export default Slide;