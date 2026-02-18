import React from 'react';

const Tabs = ({ tabs, activeTab, onChange }) => (
  <div className="flex gap-2 p-1 bg-white/5 rounded-full">
    {tabs.map(tab => (
      <button 
        key={tab.id}
        onClick={() => onChange(tab.id)}
        className={`flex-1 py-2 rounded-full text-sm transition ${activeTab === tab.id ? 'bg-accent-primary' : ''}`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
export default Tabs;
