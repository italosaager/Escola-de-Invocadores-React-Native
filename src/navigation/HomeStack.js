import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Lanes from '../pages/otherpages/Lanes';
import Counters from '../pages/Counters';
import Cg from '../pages/otherpages/Cg';

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
    <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
    <Stack.Screen name='Counters' component={Counters}  />
    <Stack.Screen name='Lanes' component={Lanes} />
    <Stack.Screen name='Conhecimentos gerais' component={Cg} />
   </Stack.Navigator>
  );
}