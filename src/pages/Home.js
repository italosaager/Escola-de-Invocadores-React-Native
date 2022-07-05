import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
 return (
  <ScrollView style={styles.container}>

    <Text style={styles.title}> Patch atual: </Text>
    <Text style={styles.text}> Dicas separadas por rotas </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/toplaner.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>TOP LANER</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/jungler.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>JUNGLER</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/midlaner.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>MID LANER</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/adc.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>AD CARRY</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/suporte.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>SUPORTE</Text>
    </TouchableOpacity>

    </ScrollView>

    <Text style={styles.text}> Conhecimentos gerais </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/arauto.jpg')} title='TOP LANER'/>
      <Text style={styles.textimage}>ARAUTO</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/baron.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>BARON</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/torre.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>TORRES</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/itens.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>ITENS</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/classes.jpg')} title='TOP LANER'/>
      <Text style={styles.textimage}>CLASSES</Text>
    </TouchableOpacity>

    </ScrollView>

    <Text style={styles.text}> Streamers </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/hardbr.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>Hardbr</Text>
    </TouchableOpacity>

    </ScrollView>

    <Text style={styles.text}> Canais no YouTube </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container2}>
      
    <TouchableOpacity style={styles.touch}>
      <Image style={styles.images} source={require('../assets/hardbryt.png')} title='TOP LANER'/>
      <Text style={styles.textimage}>Hardbr</Text>
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