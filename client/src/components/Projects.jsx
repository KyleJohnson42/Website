import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader.jsx';

const Projects = ({setPageSelect, isMobile}) => {
  const handleClick = () => {
    setPageSelect('contact');
  };

  return <div className='page'>
    <div className='projectsPage' style={{flexDirection: `${isMobile  ? 'column' : 'row'}`, height: `${isMobile ? 'fit-content' : ''}`}} >
      <div className='projectsPageLeft' style={{width: `${isMobile  ? '100%' : '50%'}`, margin: `${isMobile ? '50px' : '0'}`}} >
        <p className='projectsTitle largeText'>My projects</p>
        <p className='projectsText'>I've made more than just this one website! Here is a sampling of my work, both professional and personal. More updates to come for this page, so keep an eye out!<br /><br />If you'd like to know more about any of these projects or about other work not listed here, then please check out my...</p>
        <a href='./assets/kyle_johnson_resume.pdf' target='_blank' className='projectsButton' >Resume</a>
        <p className='projectsText'>Or, if you'd like, don't hesitate to...</p>
        <button className='projectsButton expand' onClick={handleClick} >Contact Me</button>
      </div>
      <div className='projectsPageRight'>
        <div className='professional'>
          <p className={`projectsTitle${isMobile ? '' : ' smallText'}`} >Professional Work</p>
          <div className='projectList' style={{flexDirection: `${isMobile ? 'column' : 'row'}`, height: `${isMobile ? 'fit-content' : '250px'}`}} >
            <div className='projectCard'>
              <div className='innerProjectCard'>
                <div className='projectImage' style={{backgroundImage: 'url(./assets/mylabsdirect.png)'}} />
                <p>Invene - MyLabsDirect<br /><br />Multipurpose patient portal capable of scheduling various medical services and delivering their results.<br /><br />Designed and implemented auth flows, data collection, email integration, and more. Live website <a href="https://dashboard.mylabsdirect.com">here,</a> or read more <a href="https://www.invene.com/case-studies/mylabsdirect">here.</a></p>
              </div>
            </div>
            <div className='projectCard'>
              <div className='innerProjectCard'>
                <div className='projectImage' style={{backgroundImage: 'url(./assets/pelitas.webp)'}} />
                <p>Invene - Pelitas<br /><br />Internal hospital software used to track patient records and insurance details. <br /><br />Handled multiple direct user requests from hospital staff as the company navigated a major acquisiton and version update. Displayed significant versatility and adaptibilty as I rapidly learned entirely new programming languages, tools, and services amidst a busy transitional period. Also honed communication skills with non-engineer clients.</p>
              </div>
            </div>
            <div className='projectCard'>
              <div className='innerProjectCard'>
                <div className='projectImage' style={{backgroundImage: 'url(./assets/amazon.jpg)'}} />
                <p>Amazon - Front End Engineer 1<br /><br />Internal financial planning tool used by physical stores to consolidate past statistics and model future scenarios.<br /><br />Experienced internal tools and practices unique to the industry. Worked with multiple teams, strict CI/CD pipelines, and data on a global scale.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='personal'>
          <p className={`projectsTitle${isMobile ? '' : ' smallText'}`} >Personal Projects</p>
          <div className='projectList' style={{flexDirection: `${isMobile ? 'column' : 'row'}`, height: `${isMobile ? 'fit-content' : '250px'}`}} >
            <div className='projectCard'>
              <div className='innerProjectCard'>
                <div className='projectImage' style={{backgroundImage: 'url(./assets/jobtracker.jpg)'}} />
                <p>JobTracker<br /><br />Full stack application that tracks job search progress and automatically calculates and displays metrics.<br /><br />Designed and built completely solo and from scratch, with a fully implemented CRUD API and database storage for different profiles. Self-imposed a strict deadline to improve my ability to identify an MVP for an application and plan scope in advance appropriately.<br /><br />Implemented interesting data visualizations and CSS transitions for a clean user experience. Live demo coming soon, GitHub repo <a href="https://github.com/KyleJohnson42/JobTracker">here.</a></p>
              </div>
            </div>
            <div className='projectCard'>
              <div className='innerProjectCard'>
                <div className='projectImage' style={{backgroundImage: 'url(./assets/catwalk.jpg)'}} />
                <p>Catwalk<br /><br />Modernized front page of e-commerce website implemented by Agile team of software engineers.<br /><br />Designed and implemented one module of a greater whole - Specifically, the product reviews module of an e-commerce proposal. Created dynamic visualizations of aggregate reivew scores, a form to submit reviews, and search functionality for previous reviews.<br /><br />Ultimately combined my puzzle piece with those of other engineers on my team to create a full mockup. Live demo coming soon, GitHub repo <a href="https://github.com/KyleJohnson42/Catwalk">here.</a></p>
              </div>
            </div>
            <div className='projectCard'>
              <div className='innerProjectCard'>
                <div className='projectImage' style={{backgroundImage: 'url(./assets/chess.jpg)'}} />
                <p>Chess<br /><br />The game of chess, implemented as a console app in C#.<br /><br />Fully converted all game logic into code. Strongly utilized Object Orient Programming to create appropriate classes for pieces, spaces, etc. The application walks players through each turn step by step, rendering the board in ASCII style as the game state changes. Prevents illegal moves, keeps track of captured pieces, and determines win conditions.<br /><br />Playable by two players taking turns on the console. Download the console app <a href="./assets/Chess.exe">here,</a> GitHub repo <a href="https://github.com/KyleJohnson42/Chess">here.</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Projects;