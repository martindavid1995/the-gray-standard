import './App.css';
import React from 'react';
import Header from './components/Header.js';
import HomeContent from './components/HomeContent'
import ServicesContent from './components/ServicesContent'
import AboutUsContent from './components/AboutUsContent'
import ContactContent from './components/ContactContent'
import GalleryContent from './components/GalleryContent'
import TestimonialsContent from './components/TestimonialsContent'
import Footer from './components/Footer';
import { Container } from "react-bootstrap"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Header />
          <Routes>
            <Route path="/" element={
              <HomeContent />
            }></Route>
            <Route path="Services" element={
              <ServicesContent />
            }></Route>
            <Route path="AboutUs" element={
              <AboutUsContent />
            }></Route>
            <Route path="Contact" element={
              <ContactContent />
            }></Route>
            <Route path="Gallery" element={
              <GalleryContent />
            }></Route>
            <Route path="Testimonials" element={
              <TestimonialsContent />
            }></Route>
          </Routes>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
