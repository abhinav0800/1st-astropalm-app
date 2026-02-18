import React from 'react';

const HandSelector = ({ selected, onSelect }) => (
  <div className="flex gap-4">
    {['left', 'right'].map(h => (
      <button 
        key={h} 
        onClick={() => onSelect(h)}
        className={`flex-1 p-4 rounded-2xl glass transition ${selected === h ? 'border-accent-glow border-2' : ''}`}
      >
        <div className="text-2xl mb-1">{h === 'left' ? '🖐️' : '✋'}</div>
        <div className="capitalize font-bold">{h} Hand</div>
      </button>
    ))}
  </div>
);
export default HandSelector;
