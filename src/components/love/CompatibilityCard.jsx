import React from 'react';
import GlassCard from '../common/GlassCard';

const CompatibilityCard = ({ percent, description }) => (
  <GlassCard className="p-6 text-center">
    <div className="text-4xl font-heading text-accent-glow mb-2">{percent}%</div>
    <div className="text-sm font-bold uppercase mb-4 tracking-tighter">Sync Level</div>
    <p className="text-secondary text-sm leading-relaxed">{description}</p>
  </GlassCard>
);
export default CompatibilityCard;
