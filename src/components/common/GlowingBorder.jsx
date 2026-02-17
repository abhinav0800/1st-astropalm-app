import React from 'react';

const GlowingBorder = ({ children, color = "#8a2be2" }) => (
  <div className="glowing-border" style={{ '--glow-color': color }}>
    {children}
  </div>
);
export default GlowingBorder;
