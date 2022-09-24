import React from 'react';
import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';

import { Box, IconButton, useTheme } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';

const SwitchModeButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);

  return (
    <Box>
      <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
        {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Box>
  );
};

export default SwitchModeButton;
