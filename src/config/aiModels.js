// ============================================
// AI Palm Reader - AI Models Configuration
// ============================================

// Vision Model (for palm image analysis)
export const VISION_MODEL = {
  id: import.meta.env.VITE_VISION_MODEL || 'allenai/molmo-2-8b:free',
  name: 'Molmo Vision',
  description: 'AI vision model for palm line analysis',
  capabilities: ['image-analysis', 'palm-reading'],
  maxTokens: 2048,
  temperature: 0.7,
};

// Text/Reasoning Model (for astrology, tarot, chat)
export const TEXT_MODEL = {
  id: import.meta.env.VITE_TEXT_MODEL || 'liquid/lfm-2.5-1.2b-thinking:free',
  name: 'LFM Thinking',
  description: 'AI reasoning model for spiritual guidance',
  capabilities: ['text-generation', 'reasoning', 'astrology', 'tarot'],
  maxTokens: 4096,
  temperature: 0.8,
};

// API Configuration
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://openrouter.ai/api/v1',
  endpoints: {
    chat: '/chat/completions',
  },
  headers: {
    'Content-Type': 'application/json',
    'HTTP-Referer': import.meta.env.VITE_APP_URL || 'https://aipalmreader.app',
    'X-Title': import.meta.env.VITE_APP_NAME || 'AI Palm Reader',
  },
  timeout: 60000, // 60 seconds
  retryAttempts: 3,
  retryDelay: 1000,
};

// Model Parameters
export const MODEL_PARAMS = {
  palm: {
    model: VISION_MODEL.id,
    maxTokens: VISION_MODEL.maxTokens,
    temperature: 0.7,
    topP: 0.9,
  },
  tarot: {
    model: TEXT_MODEL.id,
    maxTokens: 3000,
    temperature: 0.85,
    topP: 0.95,
  },
  horoscope: {
    model: TEXT_MODEL.id,
    maxTokens: 2500,
    temperature: 0.8,
    topP: 0.9,
  },
  chat: {
    model: TEXT_MODEL.id,
    maxTokens: 2000,
    temperature: 0.75,
    topP: 0.9,
  },
  guidance: {
    model: TEXT_MODEL.id,
    maxTokens: 2000,
    temperature: 0.8,
    topP: 0.9,
  },
  love: {
    model: TEXT_MODEL.id,
    maxTokens: 2500,
    temperature: 0.85,
    topP: 0.95,
  },
};

// Get model by feature
export function getModelConfig(feature) {
  return MODEL_PARAMS[feature] || MODEL_PARAMS.chat;
}

// Validate API key
export function hasValidApiKey() {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  return apiKey && apiKey.length > 10 && apiKey !== 'your_openrouter_api_key_here';
}
