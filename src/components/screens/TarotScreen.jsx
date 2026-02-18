import React from 'react';
import Header from '../common/Header';
import { TAROT_CATEGORIES } from '../../utils/constants';
import FeatureCard from '../common/FeatureCard';

const TarotScreen = ({ navigate, goBack }) => (
  <div className="screen">
    <Header title="Tarot Reading" showBack onBack={goBack} />
    <div className="p-6 text-center">
      <p className="mb-8 text-secondary">Choose the area of life you wish to explore.</p>
      <div className="grid grid-cols-1 gap-4">
        {TAROT_CATEGORIES.map(cat => (
          <div key={cat} onClick={() => navigate('tarot-category', { category: cat })} 
               className="glass p-6 rounded-2xl flex items-center justify-between">
            <span className="text-lg font-bold">{cat}</span>
            <span>✨</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default TarotScreen;
