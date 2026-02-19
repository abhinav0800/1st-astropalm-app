import React from 'react';

const LuckyElement = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 glass p-4 rounded-2xl">
    <div className="text-xl">{icon}</div>
    <div>
      <div className="text-[10px] uppercase text-muted">{label}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  </div>
);
export default LuckyElement;
