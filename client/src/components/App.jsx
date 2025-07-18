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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1200);
    }

    //Initiate background effects
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    }).then(() => {
        setInit(true);
    });

    //Initiate screen size detection
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    (async function () {
      console.log('Testing Azure function...');
      const { text } = await( await fetch(`/api/message`)).json();
      console.log(text);
    })();
  });

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
              <Home setPageSelect={setPageSelect} isMobile={isMobile} />
            </CSSTransition>
            <CSSTransition in={pageSelect == 'about'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
              <About setPageSelect={setPageSelect} isMobile={isMobile} />
            </CSSTransition>
            <CSSTransition in={pageSelect == 'projects'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
              <Projects setPageSelect={setPageSelect} isMobile={isMobile} />
            </CSSTransition>
            <CSSTransition in={pageSelect == 'contact'} timeout={{ appear: 1000, enter: 1000, exit: 500}} classNames="sectionContainer" unmountOnExit>
              <Contact isMobile={isMobile} />
            </CSSTransition>
          </div>
        </>
      }
    </>
	);
};

export default App;
