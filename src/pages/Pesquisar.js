import React, {useState} from 'react';
import { View, Text, StyleSheet, Keyboard, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function Pesquisar() {

 return (

  <ScrollView style={styles.container}>

    <ScrollView>

      <View style={styles.organizarsearch}>

      <TextInput   
        style={styles.search}
        placeholder='O que está buscando?' 
        autoCapitalize='none'
        autoCorrect={false}
        value={''}
       
   >
    </TextInput>
    <Ionicons style={styles.searchicon} name='search' size={36} onPress={() => {}}/>
      </View>

    </ScrollView>



  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.9,
    paddingTop: 20,
  },
  search:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 20,
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderRadius: 44 / 2,
  },
  organizarsearch:{
    flexDirection: 'row',
  },
  searchicon:{
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    color: '#fff',
  }
})