import React from 'react';
import GlassCard from '../common/GlassCard';

const PalmAnalysisCard = ({ title, description, icon }) => (
  <GlassCard className="mb-4 overflow-hidden">
    <div className="flex items-start gap-4">
      <div className="text-3xl mt-1">{icon}</div>
      <div>
        <h4 className="text-accent-glow font-bold mb-1">{title}</h4>
        <p className="text-sm text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  </GlassCard>
);
export default PalmAnalysisCard;
