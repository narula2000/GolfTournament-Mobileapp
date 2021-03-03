import React from 'react';
import { Provider } from 'react-native-paper';
import Routes from './src/router';
import { theme } from './src/core/theme';

const Main = () => (
  <Provider theme={theme}>
    <Routes />
  </Provider>
);

export default Main;
