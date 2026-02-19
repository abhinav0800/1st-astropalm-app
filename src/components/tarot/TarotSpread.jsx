import React from 'react';

const TarotSpread = ({ cards }) => (
  <div className="flex justify-center gap-4 py-8">
    {cards.map((card, idx) => (
      <div key={idx} className="spread-item">
        <span className="text-xs text-muted mb-2 block">{['Past', 'Present', 'Future'][idx]}</span>
        {card}
      </div>
    ))}
  </div>
);
export default TarotSpread;
