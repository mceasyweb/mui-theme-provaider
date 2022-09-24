import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';

import { useMemo } from 'react';

const useTheming = (mode: PaletteMode, darkTheme: ThemeOptions, lightTheme: ThemeOptions) => {
  const theme = useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode, darkTheme, lightTheme]);
  return theme;
};

export default useTheming;
