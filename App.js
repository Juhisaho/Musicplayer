import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './app/navigation/Navigator';
import AudioProvider from './app/context/AudioProvider';
import color from './app/misc/Color';


export default function App() {
  return (
    <AudioProvider >
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}
