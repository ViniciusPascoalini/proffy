import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';

import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';

import GlobalStyle from './assets/styles/global';
import ThemeSwitcher from './components/ThemeSwitcher';


function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

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