import React from 'react';
import TarotCard from './TarotCard';

const TarotDeck = ({ onDraw }) => (
  <div className="tarot-deck-container">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="deck-card-offset" style={{ marginLeft: `${i * 5}px` }}>
        <TarotCard onClick={onDraw} />
      </div>
    ))}
  </div>
);
export default TarotDeck;
