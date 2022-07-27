import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Counters from '../pages/Counters';
import DetalhesCounter from '../pages/otherpages/DetalhesCounter';

const Stack = createStackNavigator();

export default function CounterStack() {
 return (
   <Stack.Navigator
   screenOptions={{ 
    headerStyle: {backgroundColor: '#000', opacity: 0.9}, 
    headerTintColor: '#fff',
    tabBarStyle: {backgroundColor: '#000', opacity: 0.9,},
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: 'grey',
    tabBarActiveBackgroundColor: 'royalblue',
    tabBarLabelStyle: {fontSize: 14}
  }}
   >
    <Stack.Screen name='Counters' component={Counters}  />
    <Stack.Screen name='Detalhes' component={DetalhesCounter}  />
   </Stack.Navigator>
  );
}