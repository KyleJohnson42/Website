import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import NotFound from './NotFound.jsx';
import options from '../../../public/particles.js';



const App = () => {
  const [init, setInit] = useState(false);
	const [pageSelect, setPageSelect] = useState('home');

  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadSlim(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = (container) => {
      console.log(container);
  };

  const memoizedParticles = useMemo(() => {
      return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
    }, [init]
  );

	return (
    <>
      {init &&
        <>
          {memoizedParticles}
          <div className='app'>
            <Navbar pageSelect={pageSelect} setPageSelect={setPageSelect} />
            <CSSTransition in={pageSelect == 'home'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
              <Home setPageSelect={setPageSelect} />
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
          </div>
        </>
      }
    </>
	);
};

export default App;
