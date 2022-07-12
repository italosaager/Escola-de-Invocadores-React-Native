import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Keyboard, Button, } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default function Search() {

  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    fetchPosts();
    return () => {

    }
  }, [])

  const fetchPosts = () => {
    const apiURL = require('../Lists/champListjson.json');
    fetch(apiURL).then((response) => response.json()).then((responseJson) => {
      setfilterData(responseJson);
      setmasterData(responseJson);
    }).catch((error) => {
      console.error(error);
    })
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setsearch(text);
    } else {
      setfilterData(masterData);
      setsearch(text);
    }
  }

  const ItemView = ({item}) =>{
    return (
      <Text style={styles.itemStyle}>
        {item.id}{'. '}{item.name}
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}/>
    )
  }

 return (

  <SafeAreaView style={{flex: 1}}>

      <View style={styles.container}>
        <TextInput 
        style={styles.textInputStyle}
        value={search}
        placeholder='Digite sua busca aqui!'
        underlineColorAndroid='transparent'
        onChangeText={(text) => searchFilter(text)}
        />
        <FlatList 
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        />
      </View>


  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
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
  },
  itemStyle:{
    padding: 15,
  },
  textInputStyle:{
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#fff'
  }
})