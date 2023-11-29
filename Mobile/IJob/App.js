import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routers/stackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://192.168.1.11:4000');


export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style='auto'/>
        <Routes socket={socket}/>
      </NavigationContainer>
    </>
  );
}
