import Header, {Footer} from './Navbar.js';

function Contact(){
    return (
        <div id='grid-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                <h1>CONTACT</h1>
            </div>
            <div className='footer-container'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Contact