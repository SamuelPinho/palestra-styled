import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Buttons } from './Buttons';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Buttons />
    </ThemeProvider>
  );
}

export default App;
