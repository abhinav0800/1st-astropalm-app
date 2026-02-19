import React from 'react';

const ChatBubble = ({ message }) => {
  const isBot = message.role === 'assistant';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
        isBot ? 'bg-white/10 text-white rounded-tl-none' : 'bg-accent-primary text-white rounded-tr-none'
      }`}>
        {message.content}
      </div>
    </div>
  );
};
export default ChatBubble;
