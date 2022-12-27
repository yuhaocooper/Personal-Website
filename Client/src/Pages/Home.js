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
            <h1 class='standard'>Cormorant</h1>
            <p>Cormorant</p>
            <button onClick={callTestApi}>Call Test API</button>
        </div>
    )
}  

export default Home;