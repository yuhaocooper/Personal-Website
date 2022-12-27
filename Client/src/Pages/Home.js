import Header from './Navbar.js';
import testimg from './images/copy-space-blooming-flowers.jpg'

function callTestApi() {
    fetch('http://localhost:4000/api/test')
        .then(res => res.text())
        .then(data => alert(data))
}

function Home (){  
    return (
        <div>
            <Header></Header>
            <h1 style={{'font-family': 'standard'}}>Site is currently under construction</h1>
            <img src={testimg}/>
            <button onClick={callTestApi}>Call Test API</button>
        </div>
    )
}  

export default Home;