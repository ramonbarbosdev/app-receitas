import React, { createContext, useContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from './theme';

type ThemeName = 'light' | 'dark';

interface ThemeContextType {
  themeName: ThemeName;
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>('light');

  const toggleTheme = () => {
    setThemeName(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = themeName === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};
