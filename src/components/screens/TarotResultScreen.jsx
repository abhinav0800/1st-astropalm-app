import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import CardRevealAnimation from '../tarot/CardRevealAnimation';
import { tarotService } from '../../services/tarotService';
import { useLanguage } from '../../context/LanguageContext';
import LoadingSpinner from '../common/LoadingSpinner';

const TarotResultScreen = ({ screenData, navigate }) => {
  const { language } = useLanguage();
  const [reading, setReading] = useState("");
  const { cards, category } = screenData;

  useEffect(() => {
    const fetchReading = async () => {
      const res = await tarotService.getReading(cards, category, language);
      setReading(res);
    };
    fetchReading();
  }, []);

  return (
    <div className="screen overflow-auto">
      <Header title="The Cards Speak" />
      <div className="p-6">
        <div className="flex justify-center gap-2 mb-8">
          {cards?.map(card => <CardRevealAnimation key={card.id} card={card} />)}
        </div>
        <div className="glass p-6 rounded-3xl">
          {reading ? <p className="leading-relaxed">{reading}</p> : <LoadingSpinner />}
        </div>
      </div>
    </div>
  );
};
export default TarotResultScreen;
