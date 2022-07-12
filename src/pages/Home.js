import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation();

 return (
  <ScrollView style={styles.container}>

    <Text style={styles.text}> Dicas separadas por rotas </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/campeoes/darius.jpg')} />
      <Text style={styles.textimage}>TOP LANER</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/campeoes/rammus.jpg')} />
      <Text style={styles.textimage}>JUNGLER</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/campeoes/ahri.png')}/>
      <Text style={styles.textimage}>MID LANER</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/campeoes/ashe.jpg')} />
      <Text style={styles.textimage}>AD CARRY</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/campeoes/thresh.jpg')} />
      <Text style={styles.textimage}>SUPORTE</Text>
    </TouchableOpacity>

    </ScrollView>

    <Text style={styles.text}> Conhecimentos gerais </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/images/minions.png')}/>
      <Text style={styles.textimage}>MINIONS</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/images/arauto.jpg')}/>
      <Text style={styles.textimage}>ARAUTO</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/images/baron.png')} />
      <Text style={styles.textimage}>BARON</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/images/torre.png')}/>
      <Text style={styles.textimage}>TORRES</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/images/itens.png')}/>
      <Text style={styles.textimage}>ITENS</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/images/classes.jpg')}/>
      <Text style={styles.textimage}>CLASSES</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Counters')}>
      <Image style={styles.images} source={require('../assets/images/counters.png')}/>
      <Text style={styles.textimage}>COUNTERS</Text>
    </TouchableOpacity>

    </ScrollView>

    <Text style={styles.text}> Streamers </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch} onPress={() => Linking.openURL('https://www.twitch.tv/1hardbr1')}>
      <Image style={styles.images} source={require('../assets/images/hardbr.png')}/>
      <Text style={styles.textimage}>Hardbr</Text>
    </TouchableOpacity>

    </ScrollView>

    <Text style={styles.text}> Canais no YouTube </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch} onPress={() => Linking.openURL('https://www.youtube.com/italosaager')}>
      <Image style={styles.images} source={require('../assets/images/hardbryt.png')}/>
      <Text style={styles.textimage}>Hardbr</Text>
    </TouchableOpacity>

    </ScrollView>

    <Text style={styles.text}> Localizações físicas </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch} onPress={() => Linking.openURL('geo:34.0324664,-118.4596429,17z')}>
      <Image style={styles.images} source={require('../assets/images/riotgames.jpg')}/>
      <Text style={styles.textimage}>Riot Games</Text>
    </TouchableOpacity>

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
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
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

})