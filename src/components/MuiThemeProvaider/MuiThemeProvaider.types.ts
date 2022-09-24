import { PaletteMode, ThemeOptions } from '@mui/material';

export type MuiThemeProvaiderProps = {
  mode?: PaletteMode;
  lightTheme?: ThemeOptions;
  darkTheme?: ThemeOptions;
  children?: JSX.Element;
};
