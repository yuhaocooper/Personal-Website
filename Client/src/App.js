import React from "react";

//CSS files
import './App.css';

//Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Welcome from "./Pages/Welcome";
// import Second from './Pages/Second'

// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
