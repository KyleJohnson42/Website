import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import NotFound from './NotFound.jsx';



const App = () => {
	const [pageSelect, setPageSelect] = useState('home');

	return (
    <>
      <Navbar pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <CSSTransition in={pageSelect == 'home'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
        <Home />
      </CSSTransition>
      <CSSTransition in={pageSelect == 'about'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
        <About />
      </CSSTransition>
      <CSSTransition in={pageSelect == 'projects'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
        <Projects />
      </CSSTransition>
      <CSSTransition in={pageSelect == 'contact'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
        <Contact />
      </CSSTransition>
    </>
	);
};

export default App;
