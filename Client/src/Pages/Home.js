import Header, {Footer} from '../Components/Navbar.js';
import About from './About.js';
import Contact from './Contact.js';
import Blog from './Blog.js'

function Home (){  
    return (
        <div id='grid-container'>
            <Header></Header>
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
            <Footer></Footer>
        </div>
    )
}  

export default Home;