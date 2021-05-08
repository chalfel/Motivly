import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomeScreen } from './src/screens/Home';
import {AppProvider} from './src/contexts';
export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <HomeScreen />
    </AppProvider>
  );
}

