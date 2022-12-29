import Header, {Footer} from '../Components/Navbar.js';

function Blog(){
    return (
        <div id='grid-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                <h1>BLOG</h1>
            </div>
            <div className='footer-container'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Blog