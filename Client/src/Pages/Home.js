import Header, {Footer} from './Navbar.js';
import About from './About.js';
import Contact from './Contact.js';
import Blog from './Blog.js'

function Home (){  
    return (
        <div id='grid-container'>
            <div>
                <Header></Header>
            </div>
            <div id='main-body'>
                <h1>HI, I'M YUHAO</h1>
                <h1>HI, I'M YUHAO</h1>
                <h1>HI, I'M YUHAO</h1>
                <h1>HI, I'M YUHAO</h1>
                <h1>HI, I'M YUHAO</h1>
                <h1>HI, I'M YUHAO</h1>
                <h1>HI, I'M YUHAO</h1>
                <h2>blah blah blah</h2>
            </div>
            <div className='footer-container'>
                <Footer></Footer>
            </div>
        </div>
    )
}  

export default Home;