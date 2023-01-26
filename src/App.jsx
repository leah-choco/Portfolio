import React from 'react';

import './index.css';

//Importing all the files needed to render the components
import Header from './components/Header/Header';
//import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import References from './components/References/References';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
 
const App = () => {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <About />
      <Experience />
      <Projects />   
      <References />  
      <Contact />
      <Footer /> 
    </>
  )
}

export default App