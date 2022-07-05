import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Tiergod() {
 return (
  <ScrollView style={styles.container}>

    <ScrollView>
    <Text style={styles.title} >
      Patch atual: 
    </Text>
    <TouchableOpacity>
      
    </TouchableOpacity>
    </ScrollView>

    <ScrollView>
    <Text style={styles.title} >
      Lanes
    </Text>
    </ScrollView>


  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.9
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
  }
})