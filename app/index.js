import React, { Component } from 'react';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout, Text } from 'react-native-ui-kitten';

import { Header, BottomNav } from './navigation/navigation'

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <Header />
      <BottomNav />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
