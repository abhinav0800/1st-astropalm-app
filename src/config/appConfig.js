// ============================================
// AI Palm Reader - Application Configuration
// ============================================

// App Information
export const APP_INFO = {
  name: import.meta.env.VITE_APP_NAME || 'AI Palm Reader',
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  description: 'AI-powered palm reading, tarot, and astrology guidance',
  url: import.meta.env.VITE_APP_URL || 'https://aipalmreader.app',
  author: 'AI Palm Reader Team',
};

// Feature Flags
export const FEATURES = {
  analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  offlineMode: import.meta.env.VITE_ENABLE_OFFLINE_MODE !== 'false',
  pwaInstallPrompt: import.meta.env.VITE_ENABLE_PWA_INSTALL_PROMPT !== 'false',
  debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
};

// Screen Names
export const SCREENS = {
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

// Timing Constants
export const TIMING = {
  splashDuration: 3000,
  toastDuration: 3000,
  snackbarDuration: 2000,
  transitionDuration: 300,
  debounceDelay: 500,
  autoSaveInterval: 30000,
};

// Image Configuration
export const IMAGE_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  maxWidth: 1920,
  maxHeight: 1920,
  quality: 0.8,
  acceptedTypes: ['image/jpeg', 'image/png', 'image/webp'],
};

// Chat Configuration
export const CHAT_CONFIG = {
  maxMessages: 100,
  maxMessageLength: 1000,
  typingIndicatorDelay: 500,
};

// Storage Keys
export const STORAGE_KEYS = {
  hasLaunched: 'hasLaunched',
  selectedLanguage: 'selectedLanguage',
  hasCompletedOnboarding: 'hasCompletedOnboarding',
  userProfile: 'userProfile',
  chatHistory: 'chatHistory',
  palmResults: 'palmResults',
  tarotHistory: 'tarotHistory',
  horoscopeCache: 'horoscopeCache',
  dailyGuidanceCache: 'dailyGuidanceCache',
  lastSyncTime: 'lastSyncTime',
};

// Social/Share Configuration
export const SHARE_CONFIG = {
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aipalmreader',
  appStoreUrl: 'https://apps.apple.com/app/ai-palm-reader/id123456789',
  websiteUrl: 'https://aipalmreader.app',
  shareHashtags: ['AIPalmReader', 'Tarot', 'Astrology', 'Horoscope'],
};

// Rating Configuration
export const RATING_CONFIG = {
  minSessionsForPrompt: 5,
  minDaysForPrompt: 3,
  promptInterval: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// Debug Logging
export function debugLog(...args) {
  if (FEATURES.debugMode) {
    console.log('🔮 [DEBUG]:', ...args);
  }
}

// Error Logging
export function errorLog(...args) {
  console.error('❌ [ERROR]:', ...args);
}
