import React from 'react';

const BottomNav = ({ activeTab, onTabChange }) => (
  <nav className="bottom-nav">
    <button onClick={() => onTabChange('home')}>🏠</button>
    <button onClick={() => onTabChange('chat')}>💬</button>
    <button onClick={() => onTabChange('settings')}>⚙️</button>
  </nav>
);
export default BottomNav;
