import React from 'react';

const Header = ({ title, showBack, onBack }) => (
  <header className="app-header">
    {showBack && <button onClick={onBack} className="back-btn">←</button>}
    <h1>{title}</h1>
    <div className="header-right" />
  </header>
);
export default Header;
