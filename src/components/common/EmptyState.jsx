import React from 'react';

const EmptyState = ({ icon, title, message }) => (
  <div className="screen-empty">
    <div className="screen-empty-icon">{icon}</div>
    <h3 className="screen-empty-title">{title}</h3>
    <p className="screen-empty-text">{message}</p>
  </div>
);
export default EmptyState;
