import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Lanes from './pages/Lanes';
import Counters from './pages/Counters';
import Tiergod from './pages/Tiergod';
import Tutorials from './pages/Tutorials';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function Routes() {
 return (
  <NavigationContainer>

    <Tab.Navigator 
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
    <Tab.Screen name='Início' component={Home} options={{
      tabBarIcon: () => (<Ionicons name='home-outline' color={'#fff'} size={22} />)
    }} />

    <Tab.Screen name='Counters' component={Counters} options={{
      tabBarIcon: () => (<Feather name='smile' color={'#fff'} size={22} />)
    }} />

    <Tab.Screen name='Tutoriais' component={Tutorials} options={{
      tabBarIcon: () => (<Feather name='book' color={'#fff'} size={22} />)
    }} />

    <Tab.Screen name='Tier God' component={Tiergod} options={{
      tabBarIcon: () => (<Feather name='trending-up' color={'#fff'} size={22} />)
    }} />

    <Tab.Screen name='Lanes' component={Lanes} options={{
      tabBarIcon: () => (<Feather name='box' color={'#fff'} size={22} />)
    }} />
   </Tab.Navigator>

  </NavigationContainer>

  );
}