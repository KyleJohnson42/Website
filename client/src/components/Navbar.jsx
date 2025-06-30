import React, { useState, useEffect } from 'react';

const Navbar = ({pageSelect, setPageSelect}) => {
  const handleClick = e => {
    setPageSelect(e.target.id);
	};

  console.log(pageSelect, setPageSelect);

  return (
    <nav>
      <li id='home' onClick={handleClick} className={pageSelect == 'home' ? 'active' : 'inactive'}>Home</li>
      <li id='about' onClick={handleClick} className={pageSelect == 'about' ? 'active' : 'inactive'}>About</li>
      <li id='projects' onClick={handleClick} className={pageSelect == 'projects' ? 'active' : 'inactive'}>Projects</li>
      <li id='contact' onClick={handleClick} className={pageSelect == 'contact' ? 'active' : 'inactive'}>Contact</li>
      <div className={`underline ${
        pageSelect == 'home' ? 'underlineHome'
        : pageSelect == 'about' ? 'underlineAbout'
        : pageSelect == 'projects' ? 'underlineProjects'
        : pageSelect == 'contact' ? 'underlineContact'
        : ''
      }`}></div>
    </nav>
  );
}

export default Navbar;