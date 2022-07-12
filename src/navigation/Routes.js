import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../navigation/HomeStack';
import Search from '../pages/Search';
import Tiergod from '../pages/Tiergod';
import Tutorials from '../pages/Tutorials';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import CounterStack from './CounterStack';


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
    <Tab.Screen name='Home' component={HomeStack} options={{
      tabBarIcon: () => (<Ionicons name='home-outline' color={'#fff'} size={22} />), headerShown: false 
    }} />

    <Tab.Screen  name='Counters' component={CounterStack} options={{ headerShown: false, 
      tabBarIcon: () => (<Feather name='smile' color={'#fff'} size={22} />), 
    }} />

    <Tab.Screen name='Tutorials' component={Tutorials} options={{
      tabBarIcon: () => (<Feather name='book' color={'#fff'} size={22} />), 
    }} />

    <Tab.Screen name='Tier God' component={Tiergod} options={{
      tabBarIcon: () => (<Feather name='trending-up' color={'#fff'} size={22} />), 
    }} />

    <Tab.Screen  name='Search' component={Search} options={{
      tabBarIcon: () => (<Feather name='search' color={'#fff'} size={22} />), headerShown: false
    }} />

   </Tab.Navigator>
  
  </NavigationContainer>
  
  

  );
}