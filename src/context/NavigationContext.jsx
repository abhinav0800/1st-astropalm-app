import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [screenData, setScreenData] = useState(null);
  const [history, setHistory] = useState(['splash']);

  const navigate = useCallback((screen, data = null) => {
    setCurrentScreen(screen);
    setScreenData(data);
    setHistory(prev => [...prev, screen]);
    window.history.pushState({ screen, data }, '', `#${screen}`);
  }, []);

  const goBack = useCallback(() => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevScreen = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentScreen(prevScreen);
    }
  }, [history]);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentScreen(event.state.screen);
        setScreenData(event.state.data);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentScreen, screenData, navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
