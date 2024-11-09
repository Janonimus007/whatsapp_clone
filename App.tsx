// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from './src/Router/TopTab/Index';
import { SafeAreaView } from 'react-native';
import MainNavigation from './src/Router/Stacks/MainNavigation';

export default function App() {
  return (
      <NavigationContainer>
        <MainNavigation />          
      </NavigationContainer>           
  );
}
