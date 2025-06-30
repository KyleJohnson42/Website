import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
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
      {pageSelect == 'home' ? <Home />
        : pageSelect == 'about' ? <About />
        : pageSelect == 'projects' ? <Projects />
        : pageSelect == 'contact' ? <Contact />
        : <NotFound />
      }
    </>
	);
};

export default App;
