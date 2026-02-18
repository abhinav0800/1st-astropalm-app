import React, { useState } from 'react';
import Header from '../common/Header';
import TarotDeck from '../tarot/TarotDeck';
import Button from '../common/Button';
import { drawCards } from '../../utils/tarotDeck';
import { TAROT_DECK } from '../../data/tarotCards';

const TarotCategoryScreen = ({ screenData, navigate }) => {
  const [selected, setSelected] = useState([]);
  const category = screenData?.category || "General";

  const handleDraw = () => {
    const cards = drawCards(TAROT_DECK, 3);
    navigate('tarot-result', { cards, category });
  };

  return (
    <div className="screen">
      <Header title={`${category} Reading`} />
      <div className="p-6 flex flex-col items-center justify-center flex-1">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🃏</div>
          <p className="text-secondary">Focus on your question about {category} and draw 3 cards.</p>
        </div>
        <Button onClick={handleDraw} size="lg" className="w-full">Draw Cards</Button>
      </div>
    </div>
  );
};
export default TarotCategoryScreen;
