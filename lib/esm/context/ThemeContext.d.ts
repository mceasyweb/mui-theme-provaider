import React from 'react';
import { PaletteMode } from '@mui/material';
interface ThemeContextSchema {
    toggleColorMode(): void;
}
export declare const useColorMode: (setMode: React.Dispatch<React.SetStateAction<PaletteMode>>) => {
    toggleColorMode: () => void;
};
export declare const ThemeContext: React.Context<ThemeContextSchema>;
export {};
