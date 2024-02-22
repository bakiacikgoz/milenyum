// GlobalContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Burada ek global durumlar ve fonksiyonlar tanımlanabilir
  const value = {
    theme,
    setTheme,
    // Diğer global durumlar ve fonksiyonlar buraya eklenebilir
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
