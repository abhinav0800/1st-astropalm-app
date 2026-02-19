import React, { useState } from 'react';

const ChatInput = ({ onSend, disabled }) => {
  const [text, setText] = useState('');
  const handleSend = () => {
    if (text.trim()) { onSend(text); setText(''); }
  };

  return (
    <div className="p-4 bg-bg-secondary border-t border-white/10 flex gap-2">
      <input 
        value={text} 
        onChange={e => setText(e.target.value)}
        disabled={disabled}
        placeholder="Ask the universe..."
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white outline-none focus:border-accent-glow"
        onKeyPress={e => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="bg-accent-primary w-10 h-10 rounded-full flex items-center justify-center">
        ✈️
      </button>
    </div>
  );
};
export default ChatInput;
