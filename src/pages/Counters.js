import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import champList from '../Lists/champList';

export default function Campeoes () {

  const navigation = useNavigation();

  <champList/>

    return (
   <View style={styles.container}>

    <FlatList 
    numColumns={5}
    data={champList}
  
    renderItem={({item}) => {
        return (
          
        <View style={styles.container2} >
          <TouchableOpacity style={{alignItems: 'center'}}>
          <Image style={styles.photos} source={item.image} />
            <Text style={styles.text}>
                {item.name}
            </Text>
          </TouchableOpacity>
      </View>)} }
        keyExtractor={(elemento) => String(elemento.key)}
    />

   </View>     
    );
};

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#000',
    },
    photos:{
      width: 70,
      height: 70,
    },
    text:{
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      
    },
    container2:{
      flex:1,
      margin: 5,
      alignItems: 'center',
    }
})

