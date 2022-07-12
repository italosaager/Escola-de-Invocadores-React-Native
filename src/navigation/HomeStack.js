import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Classes from '../pages/otherpages/Classes';

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
    <Stack.Screen name='Home' component={Home}  />
    <Stack.Screen name='Classes' component={Classes}  />
   </Stack.Navigator>
  );
}