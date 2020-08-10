import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';

import GlobalStyle from './assets/styles/global';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  const [theme, setTheme] = useState(light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return(
    <ThemeProvider theme={ theme }>
      <GlobalStyle/>
      <Routes />
      <ThemeSwitcher toogleTheme={toogleTheme}/>
    </ThemeProvider>
  
  );
}

export default App;