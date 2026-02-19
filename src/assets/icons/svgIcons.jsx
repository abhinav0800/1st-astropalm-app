import React from 'react';

export const PalmIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 2v20M17 5v14M7 5v14M2 12h20" />
  </svg>
);
// Export other icons similarly...
