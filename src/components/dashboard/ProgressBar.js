// ProgressBar.js

import React from 'react';

const ProgressBar = ({ percentage }) => {
  const progressBarStyle = {
    width: `${percentage}%`,
    height: '10px',
    backgroundColor: 'orange',
    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 5px, white 5px, white 10px)',
  };

  return <div style={progressBarStyle}></div>;
};

export default ProgressBar;
