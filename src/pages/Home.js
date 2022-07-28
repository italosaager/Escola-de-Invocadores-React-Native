import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, Linking, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { ScrollView as SV } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import lanesList from '../lists/lanesList';
import cgList from '../lists/cgList';

export default function Home() {

  const navigation = useNavigation();
  
  <lanesList/>;
  <cgList/>;

 return (

  <ScrollView style={styles.container}>

    <Text style={styles.text1}> Dicas separadas por rotas </Text>

    <SV horizontal showsHorizontalScrollIndicator={false} style={styles.container3}>
    <FlatList 
    listKey='0'
    flexDirection='row'
    showsHorizontalScrollIndicator={false}
    style={{marginBottom: 10,}}
    data={lanesList}
    renderItem={({item}) => {
        return (        
        <View style={styles.touch} >
          <TouchableOpacity onPress={() => navigation.navigate('Lanes', {lanes: item})} style={{alignItems: 'center', marginTop: 20,}}>
          <Image style={styles.images} source={item.image} />
            <Text style={styles.textimage}>
                {item.name}
            </Text>
          </TouchableOpacity>
      </View>
      )} }

        keyExtractor={(item) => String(item.key)}
    />

    </SV>

    <Text style={styles.text}> Conhecimentos gerais </Text>

    <SV horizontal showsHorizontalScrollIndicator={false} style={styles.container3}>

    <FlatList 
      listKey='1'
      flexDirection='row'
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 10,}}
      data={cgList}
      renderItem={({item}) => {
        return (        
          <View style={styles.touch} >
            <TouchableOpacity onPress={() => navigation.navigate('Conhecimentos gerais', {cg: item})} style={{alignItems: 'center', marginTop: 20,}}>
            <Image style={styles.images} source={item.image} />
              <Text style={styles.textimage}>
                  {item.name}
              </Text>
            </TouchableOpacity>
  </View>
      )} }
    keyExtractor={(item) => String(item.key)}
    />
    </SV>

    <Text style={styles.text}> Streamers </Text>

    <SV horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch} onPress={() => Linking.openURL('https://www.twitch.tv/1hardbr1')}>
      <Image style={styles.images} source={require('../assets/images/hardbr.png')}/>
      <Text style={styles.textimage}>Hardbr</Text>
    </TouchableOpacity>

    </SV>

    <Text style={styles.text}> Canais no YouTube </Text>

    <SV horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch} onPress={() => Linking.openURL('https://www.youtube.com/italosaager')}>
      <Image style={styles.images} source={require('../assets/images/hardbryt.png')}/>
      <Text style={styles.textimage}>Hardbr</Text>
    </TouchableOpacity>

    </SV>

    <Text style={styles.text}> Localizações físicas </Text>

    <SV horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch} onPress={() => Linking.openURL('geo:34.0324664,-118.4596429,17z')}>
      <Image style={styles.images} source={require('../assets/images/riotgames.jpg')}/>
      <Text style={styles.textimage}>Riot Games</Text>
    </TouchableOpacity>

    </SV>

  </ScrollView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.9,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
  },
  text1:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  images:{
    width: 150, 
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    
  },
  container2:{
    flexDirection: 'row',
    marginBottom: 20,
  },
  touch:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textimage:{
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    opacity: 0.5,
  },
  container3:{
    marginBottom: 20,
  }
})