import React, { useState } from 'react';
import TarotCard from './TarotCard';

const CardRevealAnimation = ({ card }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <TarotCard 
      card={card} 
      isRevealed={revealed} 
      onClick={() => setRevealed(true)} 
    />
  );
};
export default CardRevealAnimation;
