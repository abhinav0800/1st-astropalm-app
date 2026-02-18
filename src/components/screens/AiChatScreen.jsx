import React from 'react';
import Header from '../common/Header';
import ChatContainer from '../chat/ChatContainer';
import ChatInput from '../chat/ChatInput';
import { useAiChat } from '../../hooks/useAiChat';
import { useLanguage } from '../../context/LanguageContext';

const AiChatScreen = ({ goBack }) => {
  const { language } = useLanguage();
  const { messages, isTyping, sendMessage } = useAiChat([
    { role: 'assistant', content: 'Greetings, soul seeker. How may I guide you today?' }
  ]);

  return (
    <div className="chat-screen">
      <Header title="Cosmic AI Guide" showBack onBack={goBack} />
      <ChatContainer messages={messages} isTyping={isTyping} />
      <ChatInput onSend={(text) => sendMessage(text, language)} disabled={isTyping} />
    </div>
  );
};
export default AiChatScreen;
