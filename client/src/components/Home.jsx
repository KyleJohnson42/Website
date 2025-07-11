import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader.jsx';

const Home = ({setPageSelect, isMobile}) => {
  const handleClick = () => {
    setPageSelect('about');
  };

  return <div className='page'>
    <div className='homePage'>
      <div className='homePageLeft' style={{paddingLeft: `${isMobile ? '0' : '140px'}`}} >
        <div className='homeTexts'>
          <p className='homeText largeText'>Hi there!</p>
          <p className='homeText largeText'>I'm Kyle Johnson</p>
          <p className='homeText mediumText subtitle'>A full stack software engineer</p>
        </div>
        <div className='homeButtons' style={{flexDirection: `${isMobile ? 'column' : 'row'}`}}>
          <a href='./assets/kyle_johnson_resume.pdf' target='_blank' className='homeButton' >Resume</a>
          <a href='https://github.com/KyleJohnson42' target='_blank' className='homeButton' >GitHub</a>
          <button className='homeButton expand' onClick={handleClick} >About Me</button>
        </div>
      </div>
      {!isMobile &&
        <div className='homePageRight'>
          <img src="./assets/tech_icon.png" alt="Tech icon" width="300vw" height="300vw" />
        </div>
      }
    </div>
  </div>
};

export default Home;