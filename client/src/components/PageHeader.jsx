import React, { useState, useEffect } from 'react';

const PageHeader = ({content}) => {
  return <div className='pageHeader'>
    <h1 className='pageTitle'>
      {content}
      {/* <div className='pageTitleAccent' /> */}
    </h1>
  </div>
};

export default PageHeader;