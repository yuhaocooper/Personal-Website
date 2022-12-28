import Header, {Footer} from './Navbar.js';
import About from './About.js';
import Contact from './Contact.js';
import Blog from './Blog.js'


function callTestApi() {
    fetch('http://localhost:4000/api/test')
        .then(res => res.text())
        .then(data => alert(data))
}

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
                <button onClick={callTestApi}>Call Test API</button>
            </div>
            <div className='footer-container'>
                <Footer></Footer>
            </div>
        </div>
    )
}  

export default Home;