import React from 'react';

const PalmOverlay = () => (
  <div className="absolute inset-0 border-2 border-dashed border-accent-glow/50 rounded-3xl pointer-events-none flex items-center justify-center">
    <div className="w-3/4 h-3/4 border-2 border-accent-glow rounded-full opacity-30" />
  </div>
);
export default PalmOverlay;
