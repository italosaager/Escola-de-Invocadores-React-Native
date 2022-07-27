import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../navigation/HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import CounterStack from './CounterStack';
import Itens from '../pages/otherpages/Itens';

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
    <Tab.Screen name='home' component={HomeStack} options={{
      tabBarIcon: () => (<Ionicons name='home-outline' color={'#fff'} size={22} />), headerShown: false 
    }} />

    <Tab.Screen  name='counters' component={CounterStack} options={{ headerShown: false, 
      tabBarIcon: () => (<Feather name='smile' color={'#fff'} size={22} />), 
    }} />

    <Tab.Screen  name='itens' component={Itens} options={{ headerShown: false, 
      tabBarIcon: () => (<Feather name='box' color={'#fff'} size={22} />), 
    }} />
    
   </Tab.Navigator>
  
  </NavigationContainer>
  
  

  );
}