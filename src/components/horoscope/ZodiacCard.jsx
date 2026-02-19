import React from 'react';

const ZodiacCard = ({ name, onClick }) => (
  <div onClick={onClick} className="glass p-3 rounded-2xl flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10 transition">
    <div className="text-2xl">✨</div>
    <span className="text-[10px] font-bold uppercase tracking-wider">{name}</span>
  </div>
);
export default ZodiacCard;
