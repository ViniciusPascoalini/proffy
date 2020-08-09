import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';

import GlobalStyle from './assets/styles/global';
import ThemeSwitcher from './components/ThemeSwitcher';


function App() {
  return(
    <ThemeProvider theme={ light }>
      <GlobalStyle/>
      <Routes />
      <ThemeSwitcher />
    </ThemeProvider>
  
  );
}

export default App;