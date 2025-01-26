import React from 'react';
import { BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom';
import Home from './Components/Pages/Home.js';
import Company from './Components/Pages/Company.js';
import Contact from './Components/Pages/Contact.js';
import NewProject from './Components/Pages/NewProject.js';
import Container from './Components/Layout/Container.js';
import Navbar from './Components/Layout/Navbar.js';
import Footer from './Components/Layout/Footer.js';
import Projects from './Components/Layout/Projects.js';



function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Container customClass='min_height'>

      <Routes>
        
        
            <Route exact  path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newproject" element={<NewProject />} />
            <Route exact  path="/projects" element={<Projects />} />
          
      </Routes>
      </Container>

     <Footer />
    </Router>
    </div>
  );
}

export default App;
