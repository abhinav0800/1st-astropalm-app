import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';

const ChatContainer = ({ messages, isTyping }) => {
  const endRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  return (
    <div className="chat-messages overflow-y-auto flex-1 p-4 space-y-4">
      {messages.map((m, idx) => <ChatBubble key={idx} message={m} />)}
      {isTyping && <TypingIndicator />}
      <div ref={endRef} />
    </div>
  );
};
export default ChatContainer;
