import React, { useEffect, useState } from 'react';
import Header, {Footer} from './../Components/Navbar'
import { useNavigate } from "react-router-dom";


//Used functional component as I cldn't find a way to navigate to the Home page with class component after the animation has rendered.
function Welcome(){

    const [animationState, setAnimationState] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const animation = document.getElementsByClassName('animation');
        animation[0].addEventListener('animationend', ()=>{
            setAnimationState(true);
            })
        }, []
    )

    if (animationState == true){
        //navigate('/home')
    }

    return(
        <div id='grid-container'>
        <div className='hidden'>
            <Header></Header>
        </div>
        <div className='title welcome-body animation'>
            <span>Welcome!</span>
            <span>HI, I'M YUHAO</span>
        </div>
        <div className='footer-container hidden'>
            <Footer></Footer>
        </div>
    </div>
    )
}

export default Welcome;
