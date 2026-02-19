import React from 'react';

const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
      <div className="w-1.5 h-1.5 bg-accent-glow rounded-full animate-bounce" />
      <div className="w-1.5 h-1.5 bg-accent-glow rounded-full animate-bounce [animation-delay:0.2s]" />
      <div className="w-1.5 h-1.5 bg-accent-glow rounded-full animate-bounce [animation-delay:0.4s]" />
    </div>
  </div>
);
export default TypingIndicator;
