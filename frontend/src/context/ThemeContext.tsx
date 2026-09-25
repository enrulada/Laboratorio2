import React, { createContext, useContext } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const useAppTheme = () => useContext(ThemeContext);

export default ThemeContext;