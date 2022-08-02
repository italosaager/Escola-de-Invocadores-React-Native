import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import champList from '../lists/champList';

export default function Campeoes () {

  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(champList);

  useEffect(() => {
    if(searchText === ''){
      setList(champList);
    } else {
      setList(
        champList.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      );
    }
  }, [searchText]);
  const handleOrderClick = () => {
    let newChampList = [...champList];
    newChampList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    setList(newChampList);
  };
  const handleOrderSecond = () => {
    let newChampList = [...champList];
    newChampList.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
    setList(newChampList);
  };

  <champList/>
  
    return (
      
   <View style={styles.container}>

  <View style={styles.searchArea}>
    <TextInput 
    style={styles.input}
    placeholder='Digite o campeão aqui'
    placeholderTextColor="#888"
    value={searchText}
    onChangeText={(t) => setSearchText(t)}
    />
    <TouchableOpacity onPress={handleOrderSecond} onLongPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons name="order-alphabetical-ascending" size={32} color="#888" />
        </TouchableOpacity>
    </View>

    <FlatList 
    showsVerticalScrollIndicator={false}
    style={{marginBottom: 10,}}
    numColumns={5}
    data={list}
    renderItem={({item}) => {
        return (        
        <View style={styles.container2} >
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', {champ: item})} style={{alignItems: 'center', marginTop: 20,}}>
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
    opacity: 0.9,
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
    },
    searchArea:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    orderButton: {
      width: 32,
      marginRight: 30,
    },
    input: {
      flex: 1,
      height: 50,
      backgroundColor: '#363636',
      margin: 10,
      borderRadius: 5,
      fontSize: 19,
      paddingLeft: 15,
      paddingRight: 15,
      color: "#fff",
    }
})

