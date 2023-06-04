import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LoginScreen, { HomeNavigation, RegisterNavigation } from './src/routers/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style='auto'/>
        <LoginScreen/>
      </NavigationContainer>
    </>
  );
}
