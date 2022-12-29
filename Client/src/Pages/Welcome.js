import Header, {Footer} from '../Components/Navbar.js';

function Welcome (){  
    return (
        <div id='grid-container'>
            <Header visibility='hidden'></Header>
            <div className='title welcome-body'>
                <span>Welcome!</span>
                <span>HI, I'M YUHAO</span>
            </div>
            <Footer visibility='hidden'></Footer>
        </div>
    )
}  

export default Welcome;