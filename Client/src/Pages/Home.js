import Header from './Navbar.js';

function callTestApi() {
    fetch('http://localhost:4000/api/test')
        .then(res => res.text())
        .then(data => alert(data))
}

function Home (){  
    return (
        <div>
            <Header></Header>
            <div> <h1 class='standard'>Cormorant</h1> </div>
            <div><button onClick={callTestApi}>Call Test API</button></div>
        </div>
    )
}  

export default Home;