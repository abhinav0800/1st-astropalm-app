import React from 'react';
import GlassCard from '../common/GlassCard';

const GuidanceCard = ({ data }) => (
  <GlassCard className="p-8">
    <div className="text-center mb-6">
      <div className="text-4xl mb-2">🌟</div>
      <h3 className="text-xl font-bold">Today's Wisdom</h3>
    </div>
    <div className="space-y-6">
      <p className="text-secondary italic">"{data}"</p>
    </div>
  </GlassCard>
);
export default GuidanceCard;
