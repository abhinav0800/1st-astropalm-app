import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from './hooks/useNavigation';
import { useBackHandler } from './hooks/useBackHandler';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useUser } from './hooks/useUser';
import { storageService } from './services/storageService';

// Screens
import SplashScreen from './components/screens/SplashScreen';
import LanguageScreen from './components/screens/LanguageScreen';
import OnboardingScreen from './components/screens/OnboardingScreen';
import ProfileSetupScreen from './components/screens/ProfileSetupScreen';
import HomeScreen from './components/screens/HomeScreen';
import PalmScanScreen from './components/screens/PalmScanScreen';
import PalmResultScreen from './components/screens/PalmResultScreen';
import AiChatScreen from './components/screens/AiChatScreen';
import TarotScreen from './components/screens/TarotScreen';
import TarotCategoryScreen from './components/screens/TarotCategoryScreen';
import TarotResultScreen from './components/screens/TarotResultScreen';
import DailyGuidanceScreen from './components/screens/DailyGuidanceScreen';
import HoroscopeScreen from './components/screens/HoroscopeScreen';
import HoroscopeDetailScreen from './components/screens/HoroscopeDetailScreen';
import LoveReadingScreen from './components/screens/LoveReadingScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import PrivacyPolicyScreen from './components/screens/PrivacyPolicyScreen';
import ErrorScreen from './components/screens/ErrorScreen';

// Common Components
import PageTransition from './components/common/PageTransition';
import NetworkStatus from './components/common/NetworkStatus';
import ExitDialog from './components/exit/ExitDialog';
import Snackbar from './components/common/Snackbar';
import Toast from './components/common/Toast';
import ErrorBoundary from './components/common/ErrorBoundary';

import './App.css';

// Screen constants
const SCREENS = {
  SPLASH: 'splash',
  LANGUAGE: 'language',
  ONBOARDING: 'onboarding',
  PROFILE_SETUP: 'profile-setup',
  HOME: 'home',
  PALM_SCAN: 'palm-scan',
  PALM_RESULT: 'palm-result',
  AI_CHAT: 'ai-chat',
  TAROT: 'tarot',
  TAROT_CATEGORY: 'tarot-category',
  TAROT_RESULT: 'tarot-result',
  DAILY_GUIDANCE: 'daily-guidance',
  HOROSCOPE: 'horoscope',
  HOROSCOPE_DETAIL: 'horoscope-detail',
  LOVE_READING: 'love-reading',
  SETTINGS: 'settings',
  PRIVACY_POLICY: 'privacy-policy',
  ERROR: 'error',
};

function App({ onMount }) {
  const { currentScreen, navigate, goBack, screenData } = useNavigation();
  const { isOnline } = useOnlineStatus();
  const { user, isLoading: userLoading } = useUser();
  
  // App state
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ show: false, message: '' });
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });
  const [appInitialized, setAppInitialized] = useState(false);

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check if first launch
        const hasLaunched = await storageService.get('hasLaunched');
        const hasCompletedOnboarding = await storageService.get('hasCompletedOnboarding');
        const selectedLanguage = await storageService.get('selectedLanguage');
        const userProfile = await storageService.get('userProfile');

        // Determine initial screen after splash
        setTimeout(() => {
          if (!hasLaunched || !selectedLanguage) {
            navigate(SCREENS.LANGUAGE);
          } else if (!hasCompletedOnboarding) {
            navigate(SCREENS.ONBOARDING);
          } else if (!userProfile) {
            navigate(SCREENS.PROFILE_SETUP);
          } else {
            navigate(SCREENS.HOME);
          }
          setAppInitialized(true);
        }, 3000); // Splash screen duration

      } catch (error) {
        console.error('App initialization error:', error);
        setAppInitialized(true);
        navigate(SCREENS.LANGUAGE);
      }
    };

    initializeApp();
    onMount?.();
  }, []);

  // Handle back button
  const handleBackPress = useCallback(() => {
    if (currentScreen === SCREENS.HOME) {
      if (snackbar.show) {
        setShowExitDialog(true);
      } else {
        setSnackbar({ show: true, message: 'Press back again to exit' });
        setTimeout(() => {
          setSnackbar({ show: false, message: '' });
        }, 2000);
      }
      return true; // Prevent default back
    }
    return false; // Allow default back
  }, [currentScreen, snackbar.show]);

  useBackHandler(handleBackPress);

  // Show toast helper
  const showToast = useCallback((message, type = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'info' });
    }, 3000);
  }, []);

  // Handle exit confirmation
  const handleExitConfirm = () => {
    setShowExitDialog(false);
    // Close app (works in PWA standalone mode)
    if (window.navigator.app?.exitApp) {
      window.navigator.app.exitApp();
    } else {
      window.close();
    }
  };

  // Render current screen
  const renderScreen = () => {
    const screenProps = {
      navigate,
      goBack,
      screenData,
      showToast,
    };

    switch (currentScreen) {
      case SCREENS.SPLASH:
        return <SplashScreen {...screenProps} />;
      case SCREENS.LANGUAGE:
        return <LanguageScreen {...screenProps} />;
      case SCREENS.ONBOARDING:
        return <OnboardingScreen {...screenProps} />;
      case SCREENS.PROFILE_SETUP:
        return <ProfileSetupScreen {...screenProps} />;
      case SCREENS.HOME:
        return <HomeScreen {...screenProps} />;
      case SCREENS.PALM_SCAN:
        return <PalmScanScreen {...screenProps} />;
      case SCREENS.PALM_RESULT:
        return <PalmResultScreen {...screenProps} />;
      case SCREENS.AI_CHAT:
        return <AiChatScreen {...screenProps} />;
      case SCREENS.TAROT:
        return <TarotScreen {...screenProps} />;
      case SCREENS.TAROT_CATEGORY:
        return <TarotCategoryScreen {...screenProps} />;
      case SCREENS.TAROT_RESULT:
        return <TarotResultScreen {...screenProps} />;
      case SCREENS.DAILY_GUIDANCE:
        return <DailyGuidanceScreen {...screenProps} />;
      case SCREENS.HOROSCOPE:
        return <HoroscopeScreen {...screenProps} />;
      case SCREENS.HOROSCOPE_DETAIL:
        return <HoroscopeDetailScreen {...screenProps} />;
      case SCREENS.LOVE_READING:
        return <LoveReadingScreen {...screenProps} />;
      case SCREENS.SETTINGS:
        return <SettingsScreen {...screenProps} />;
      case SCREENS.PRIVACY_POLICY:
        return <PrivacyPolicyScreen {...screenProps} />;
      case SCREENS.ERROR:
        return <ErrorScreen {...screenProps} />;
      default:
        return <SplashScreen {...screenProps} />;
    }
  };

  return (
    <ErrorBoundary fallback={<ErrorScreen navigate={navigate} />}>
      <div className="app-container">
        {/* Network Status Indicator */}
        <NetworkStatus isOnline={isOnline} />

        {/* Main Screen with Transitions */}
        <PageTransition screenKey={currentScreen}>
          {renderScreen()}
        </PageTransition>

        {/* Exit Dialog */}
        <ExitDialog
          isOpen={showExitDialog}
          onClose={() => setShowExitDialog(false)}
          onConfirm={handleExitConfirm}
        />

        {/* Snackbar for back press */}
        <Snackbar
          show={snackbar.show}
          message={snackbar.message}
          onClose={() => setSnackbar({ show: false, message: '' })}
        />

        {/* Toast notifications */}
        <Toast
          show={toast.show}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'info' })}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
