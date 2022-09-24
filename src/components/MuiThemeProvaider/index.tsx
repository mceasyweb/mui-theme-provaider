import React, { useEffect, useState } from 'react';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { ThemeContext, useColorMode } from '../../context/ThemeContext';

import defaultLightTheme from '../../themes/light';
import defaultDarkTheme from '../../themes/dark';
import useTheming from '../../themes/theme';
import { MuiThemeProvaiderProps } from './MuiThemeProvaider.types';

const getFromLocalStorage = (): 'dark' | 'light' => {
  const theme = localStorage.getItem('theme') as 'dark' | 'light';

  if (theme) {
    return theme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const MuiThemeProvaider: React.FC<MuiThemeProvaiderProps> = ({
  mode = getFromLocalStorage(),
  lightTheme = defaultLightTheme,
  darkTheme = defaultDarkTheme,
  children,
}) => {
  const [currentMode, setCurrentMode] = useState<PaletteMode>(mode);
  const colorMode = useColorMode(setCurrentMode);
  const theme = useTheming(currentMode, darkTheme, lightTheme);

  useEffect(() => {
    localStorage.setItem('theme', currentMode);
  }, [currentMode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MuiThemeProvaider;
