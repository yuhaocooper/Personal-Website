import React from 'react';
import Header, { Footer } from '../Components/Navbar.js';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    };

    componentDidMount(){
    }
    ;

    componentWillUnmount(){

    };

    render(){

        return (
            <div id='grid-container'>
                <div>
                    <Header></Header>
                </div>
                <div id='main-body'>
                   <h1>Main Page</h1>
                </div>
                <div className='footer-container'>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default Home