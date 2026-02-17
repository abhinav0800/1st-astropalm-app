import React from 'react';

const Skeleton = ({ width, height, borderRadius = '12px', className = '' }) => (
  <div 
    className={`skeleton ${className}`} 
    style={{ width, height, borderRadius }}
  />
);
export default Skeleton;
