import React from 'react';
import Header, { Footer } from '../Components/Navbar.js';

class Skills extends React.Component{
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
                   <h1>Skills Page</h1>
                </div>
                <div className='footer-container'>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default Skills