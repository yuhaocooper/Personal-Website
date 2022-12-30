import React from 'react';
import Header, {Footer} from './../Components/Navbar'

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            animationFinished: false
        };
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div id='grid-container'>
                <div>
                    <Header></Header>
                </div>
                <div className='title welcome-body animation'>
                    <span>Welcome!</span>
                    <span>HI, I'M YUHAO</span>
                </div>
                <div className='footer-container'>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Welcome;
