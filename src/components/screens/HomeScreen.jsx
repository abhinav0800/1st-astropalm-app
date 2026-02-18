import React from 'react';
import { useUser } from '../../context/UserContext';
import FeatureCard from '../common/FeatureCard';
import Header from '../common/Header';
import BottomNav from '../common/BottomNav';
import PWAInstallPrompt from '../common/PWAInstallPrompt';

const HomeScreen = ({ navigate }) => {
  const { user } = useUser();

  return (
    <div className="screen screen-with-nav">
      <Header title="Cosmic Insights" />
      <div className="screen-content">
        <div className="mb-8">
          <h2 className="text-xl">Hello, <span className="text-accent-glow">{user?.name}</span></h2>
          <p className="text-sm text-muted">The stars have a message for you today.</p>
        </div>

        <PWAInstallPrompt />

        <div className="grid grid-cols-2 gap-4">
          <FeatureCard title="Palm Reading" icon="🖐️" onClick={() => navigate('palm-scan')} />
          <FeatureCard title="Tarot Deck" icon="🃏" onClick={() => navigate('tarot')} />
          <FeatureCard title="Daily Luck" icon="✨" onClick={() => navigate('daily-guidance')} />
          <FeatureCard title="Horoscope" icon="♈" onClick={() => navigate('horoscope')} />
          <FeatureCard title="Love Path" icon="💖" onClick={() => navigate('love-reading')} />
          <FeatureCard title="AI Chat" icon="💬" onClick={() => navigate('ai-chat')} />
        </div>
      </div>
      <BottomNav activeTab="home" onTabChange={(tab) => navigate(tab)} />
    </div>
  );
};
export default HomeScreen;
