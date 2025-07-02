import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader.jsx';

const About = ({setPageSelect}) => {
  const handleClick = () => {
    setPageSelect('projects');
  };

  return <div className='page'>
    <div className='aboutPage'>
      <div className='aboutPageLeft'>
        <div className='iconCol'>
          <img src="./assets/node_icon.png" alt="NodeJS icon" width="110" height="110" />
          <img src="./assets/html_icon.png" alt="HTML icon" width="110" height="110" />
          <img src="./assets/csharp_icon.png" alt="C# icon" width="110" height="110" />
        </div>
        <div className='iconCol'>
          <img src="./assets/javascript_icon.png" alt="Javascript icon" width="110" height="110" />
          <img src="./assets/react_icon.png" alt="React icon" width="110" height="110" />
          <img src="./assets/git_icon.png" alt="Git icon" width="110" height="110" />
          <img src="./assets/css_icon.png" alt="CSS icon" width="110" height="110" />
        </div>
        <div className='iconCol'>
          <img src="./assets/mysql_icon.png" alt="MySQL icon" width="110" height="110" />
          <img src="./assets/mongodb_icon.png" alt="MongoDB icon" width="110" height="110" />
          <img src="./assets/bash_icon.png" alt="Bash icon" width="110" height="110" />
        </div>
      </div>
      <div className='aboutPageRight'>
        <p className='aboutTitle largeText'>About Me</p>
        <p className='aboutText'>I am a full stack software developer specializing in React, Express, Node, and SQL databases, though I have broad experience with other technologies. I entered this line of work because, at the risk of sounding too poetic, I am an artist at heart. I have a desire to make useful, meaningful creations that have concrete, positive effects on the people around us, and to me, that is the core of software development.<br /><br />Outside of work, you'll find me acting in my local community theatre troupe or running D&D campaigns for my friends. The skills these hobbies teach are very applicable to dev work! Communication, team-building, and creativity - Blending the arts into the sciences is my passion.<br /><br />If you'd like to see some of my dev work, please feel free to...</p>
        <button className='aboutButton expand' onClick={handleClick} >View My Projects</button>
      </div>
    </div>
  </div>
};

export default About;