# mui-theme-provaider

Theme provaider for mui

## Usage

```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MuiThemeProvaider } from 'mui-theme-provaider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MuiThemeProvaider>
      <App />
    </MuiThemeProvaider>
  </React.StrictMode>
);
```

## Switch theme

You can use the SwitchModeButton button to switch from one theme to another

```bash
import React from 'react';
import { SwitchModeButton } from 'mui-theme-provaider';

const App = () => {
  return (
    <div>
      <SwitchModeButton />
      Tesht mui theme
    </div>
  );
};

export default App;
```

## Customizing

The current theme is saved in localstorage "theme" by default if this is not defined it retrieves the windows schema. The thema can be set through the props "mode" the colors are the default ones of mui.
You can pass your own theme via the lightTheme and darkTheme props.

```bash
lightTheme={{ palette: { mode: 'light', primary: { light: red[300], main: purple[500], dark: green[700] } } }}
darkTheme={{ palette: { mode: 'dark', primary: { light: blue[300], main: yellow[500], dark: blue[700] } } }}
```

## Props

- mode: "light" | "dark"
- lightTheme: ThemeOptions
- darkTheme: ThemeOptions

## License

MIT
