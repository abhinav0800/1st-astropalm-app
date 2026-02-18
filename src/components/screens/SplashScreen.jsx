import React, { useEffect } from 'react';
import AnimatedBackground from '../common/AnimatedBackground';

const SplashScreen = () => (
  <div className="splash-screen">
    <AnimatedBackground />
    <div className="splash-content text-center animate-fadeIn">
      <div className="splash-logo mb-6 text-6xl">🔮</div>
      <h1 className="splash-title">AI Palm Reader</h1>
      <p className="splash-tagline">Unlock Your Cosmic Destiny</p>
    </div>
  </div>
);
export default SplashScreen;
