import React from 'react';
import GlassCard from '../common/GlassCard';

const TarotCategoryCard = ({ title, icon, onClick }) => (
  <GlassCard onClick={onClick} className="cursor-pointer mb-4 p-6 hover:border-accent-glow transition">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <span className="text-accent-glow">→</span>
    </div>
  </GlassCard>
);
export default TarotCategoryCard;
