import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Lanes from './pages/Lanes';
import Search from './pages/Search';
import Tiergod from './pages/Tiergod';
import Tutorials from './pages/Tutorials';
import Ionicons from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
 return (
  <NavigationContainer>

    <Tab.Navigator 
    screenOptions={{ headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff'}}

     tabBarOptions={{
      activeTintColor: 'royalblue',
      inactiveTintColor: 'grey',
     }}
  
    >
    <Tab.Screen name='Início' component={Home} />

    <Tab.Screen name='Pesquisar' component={Search} />

    <Tab.Screen name='Tutoriais' component={Tutorials} />

    <Tab.Screen name='Tier God' component={Tiergod} />

    <Tab.Screen name='Lanes' component={Lanes} />
   </Tab.Navigator>

  </NavigationContainer>

  );
}