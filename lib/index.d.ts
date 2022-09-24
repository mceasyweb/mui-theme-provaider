import React from 'react';
import { PaletteMode, ThemeOptions } from '@mui/material';

declare type MuiThemeProvaiderProps = {
    mode?: PaletteMode;
    lightTheme?: ThemeOptions;
    darkTheme?: ThemeOptions;
    children?: JSX.Element;
};

declare const MuiThemeProvaider: React.FC<MuiThemeProvaiderProps>;

declare const SwitchModeButton: () => JSX.Element;

export { MuiThemeProvaider, SwitchModeButton };
