import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from '../src/theme/theme';
import ThemeContext from '../src/context/ThemeContext';

export default function RootLayout() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}