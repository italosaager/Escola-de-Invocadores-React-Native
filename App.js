import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/navigation/Routes';


export default function App() {
  return (
  <>
    <StatusBar style="light" />
    <Routes/>
  </>
  );
}
