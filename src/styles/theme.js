// ============================================
// AI Palm Reader - Theme Configuration
// ============================================

// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    dark: '#0f0f1a',
    main: '#1a1a2e',
    light: '#16213e',
  },
  
  // Secondary Colors
  secondary: {
    dark: '#0a192f',
    main: '#172a45',
    light: '#233554',
  },
  
  // Accent Colors
  accent: {
    purple: '#8b5cf6',
    violet: '#a855f7',
    cyan: '#06b6d4',
    blue: '#3b82f6',
    pink: '#ec4899',
    glow: '#00f5ff',
  },
  
  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.8)',
    muted: 'rgba(255, 255, 255, 0.5)',
    disabled: 'rgba(255, 255, 255, 0.3)',
  },
  
  // Status Colors
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Glassmorphism
  glass: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)',
    highlight: 'rgba(255, 255, 255, 0.15)',
  },
  
  // Zodiac Colors
  zodiac: {
    fire: '#ef4444',      // Aries, Leo, Sagittarius
    earth: '#22c55e',     // Taurus, Virgo, Capricorn
    air: '#3b82f6',       // Gemini, Libra, Aquarius
    water: '#06b6d4',     // Cancer, Scorpio, Pisces
  },
  
  // Tarot Colors
  tarot: {
    major: '#a855f7',
    wands: '#ef4444',
    cups: '#06b6d4',
    swords: '#64748b',
    pentacles: '#22c55e',
  },
};

// Gradients
export const gradients = {
  main: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
  accent: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
  text: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
  card: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
  glow: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(6, 182, 212, 0.5) 100%)',
  cosmic: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 70%, #000000 100%)',
};

// Shadows
export const shadows = {
  sm: '0 2px 8px rgba(0, 0, 0, 0.2)',
  md: '0 4px 16px rgba(0, 0, 0, 0.3)',
  lg: '0 8px 32px rgba(0, 0, 0, 0.4)',
  xl: '0 16px 48px rgba(0, 0, 0, 0.5)',
  glow: {
    primary: '0 0 20px rgba(139, 92, 246, 0.4)',
    cyan: '0 0 20px rgba(6, 182, 212, 0.4)',
    pink: '0 0 20px rgba(236, 72, 153, 0.4)',
  },
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
};

// Border Radius
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
  full: '9999px',
};

// Typography
export const typography = {
  fontFamily: {
    heading: "'Playfair Display', serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Fira Code', monospace",
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '40px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },
};

// Spacing
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
};

// Z-Index Scale
export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  toast: 800,
  max: 9999,
};

// Transitions
export const transitions = {
  fast: '0.15s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
  bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

// Breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Export complete theme object
const theme = {
  colors,
  gradients,
  shadows,
  radius,
  typography,
  spacing,
  zIndex,
  transitions,
  breakpoints,
};

export default theme;
