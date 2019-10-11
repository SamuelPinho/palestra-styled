import { configure, addDecorator } from '@storybook/react';
import { theme } from '../src/theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

configure(require.context('../src', true, /\.stories\.js$/), module);