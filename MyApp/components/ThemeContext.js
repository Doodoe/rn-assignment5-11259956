// ThemeContext.js
import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from './themes';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
