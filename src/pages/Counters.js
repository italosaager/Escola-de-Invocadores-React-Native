import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Campeoes () {

  const navigation = useNavigation();

    const champList=[{
    key: '0000',
    name: 'Aatrox',
    image: require('../assets/campeoes/aatrox.png'),
},
{
    key: '0001',
    name: 'Ahri',
    image: require('../assets/campeoes/ahri.png'),
},
{
    key: '0002',
    name: 'Akali',
    image: require('../assets/campeoes/akali.png'),
},
{
    key: '0003',
    name: 'Askhan',
    image: require('../assets/campeoes/askhan.jpg'),
},
{
    key: '0004',
    name: 'Alistar',
    image: require('../assets/campeoes/alistar.jpg'),
},
{
    key: '0005',
    name: 'Amumu',
    image: require('../assets/campeoes/amumu.jpg'),
},
{
    key: '0006',
    name: 'Anivia',
    image: require('../assets/campeoes/anivia.jpg'),
},
{
    key: '0007',
    name: 'Annie',
    image: require('../assets/campeoes/annie.jpg'),
},
{
    key: '0008',
    name: 'Aphelios',
    image: require('../assets/campeoes/aphelios.jpg'),
},
{
    key: '0009',
    name: 'Ashe',
    image: require('../assets/campeoes/ashe.jpg'),
},
{
    key: '0010',
    name: 'Aurelion Sol',
    image: require('../assets/campeoes/aurelion.jpg'),
},
{
    key: '0011',
    name: 'Azir',
    image: require('../assets/campeoes/azir.jpg'),
},
{
    key: '0012',
    name: 'Bardo',
    image: require('../assets/campeoes/bardo.jpg'),
},
{
    key: '0013',
    name: 'Bel Veth',
    image: require('../assets/campeoes/belveth.jpg'),
},
{
    key: '0014',
    name: 'Blitzcrank',
    image: require('../assets/campeoes/blitzcrank.jpg'),
},
{
    key: '0015',
    name: 'Brand',
    image: require('../assets/campeoes/brand.jpg'),
},
{
    key: '0016',
    name: 'Braum',
    image: require('../assets/campeoes/braum.jpg'),
},
{
    key: '0017',
    name: 'Caitlyn',
    image: require('../assets/campeoes/caitlyn.jpg'),
},
{
    key: '0018',
    name: 'Camille',
    image: require('../assets/campeoes/camille.jpg'),
},
{
    key: '0019',
    name: 'Cho Gath',
    image: require('../assets/campeoes/chogath.jpg'),
},
{
    key: '0020',
    name: 'Corki',
    image: require('../assets/campeoes/corki.jpg'),
},


];

    return (
   <View style={styles.container}>

    <FlatList 
    
    horizontal 
    data={champList}
  
    renderItem={({item}) => {
        return (
          
        <View style={styles.container2} >
          <TouchableOpacity>
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
      width: 50,
      height: 50,
      
    },
    text:{
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    container2:{
      flex:1,
      margin: 5,
    }
})

