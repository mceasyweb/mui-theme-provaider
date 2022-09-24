import React, { createContext } from 'react';
import { PaletteMode } from '@mui/material';

interface ThemeContextSchema {
  toggleColorMode(): void;
}

export const useColorMode = (setMode: React.Dispatch<React.SetStateAction<PaletteMode>>) => {
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return colorMode;
};

export const ThemeContext = createContext<ThemeContextSchema>({} as ThemeContextSchema);
