import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className="progress">
    <div className="progress-bar" style={{ width: `${progress}%` }} />
  </div>
);
export default ProgressBar;
