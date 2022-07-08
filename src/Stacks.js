import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tiergod from './pages/Tiergod';
import Pesquisar from './pages/Pesquisar';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Counters from './pages/Counters';


const Stack = createStackNavigator();

export default function Stacks() {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='counters' component={Counters} />
    <Stack.Screen name='tutorials' component={Tutorials} />
    <Stack.Screen name='tiergod' component={Tiergod} />
    <Stack.Screen name='pesquisar' component={Pesquisar} />
   </Stack.Navigator>
  </NavigationContainer>

  );
}