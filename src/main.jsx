import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import { NavigationProvider } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import { registerSW } from './registerSW';
import './index.css';
import './styles/variables.css';
import './styles/animations.css';
import './styles/glassmorphism.css';
import './styles/components.css';
import './styles/screens.css';

// Register Service Worker for PWA
registerSW();

// Remove loading class once app mounts
const removeLoadingClass = () => {
  const root = document.getElementById('root');
  if (root) {
    root.classList.remove('app-loading');
  }
};

// Error boundary fallback
const ErrorFallback = () => (
  <div className="error-fallback">
    <div className="error-content">
      <span className="error-icon">⚠️</span>
      <h1>Something went wrong</h1>
      <p>Please refresh the page to try again.</p>
      <button onClick={() => window.location.reload()}>
        Refresh App
      </button>
    </div>
  </div>
);

// Create root and render app with all providers
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <NavigationProvider>
            <AppProvider>
              <App onMount={removeLoadingClass} />
            </AppProvider>
          </NavigationProvider>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// Performance monitoring (optional)
if (import.meta.env.DEV) {
  console.log('🔮 AI Palm Reader - Development Mode');
}
