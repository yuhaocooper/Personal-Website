import React from 'react';  

function fullname (user){
    return user.first + user.last
}

const name = {
    first: "yuhaos",
    last: " tan"
}

const element = (
    <h1> Hello {fullname(name)}</h1>
)

function Home (){  
    return element
}  
   
export default Home;  