import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import champList from '../../lists/champList';

export default function DetalhesCounter({route}) {
  const champ = route.params.champ;
  const champions = champList;

  const fracoContraKeys = champ.fracocontra.map((item) => {
    return item;
  });
  const forteContraKeys = champ.fortecontra.map((item) => {
    return item;
  })
  let fracoContra = [];
  let forteContra = [];
  
  for (const champion of champions){
      for (const forte of forteContraKeys){
        if( forte == champion.key)
          forteContra.push(champion)
      }
      for(const fraco of fracoContraKeys) {
        if(champion.key == fraco){
          fracoContra.push(champion);
        }
      }
  };

  const navigation = useNavigation();
  <champList/>

 return (
   <View style={styles.container}>
    
    <View style={styles.view}>
      <Image style={styles.image}  source={champ.image}/>
      <View>

      <Text style={styles.text}>{champ.name} </Text>
      <Text style={styles.bordao}>{champ.bordao} </Text>


      <View style={styles.details} >
        <View style={styles.rotas}>
        <Text style={styles.textdetails}>{champ.rotas}</Text>
        </View>
        
        <View style={styles.dano}>
          <Text style={styles.textdetails}>{champ.dano}</Text>
          </View>

          <View style={styles.funcao}>
          <Text style={styles.textdetails}>{champ.funcao}</Text>
          </View>
      </View>
      </View>
    </View>

    <View style={styles.container2}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginRight:20, marginTop:5, marginLeft:20,}}>
        <Text style={styles.textcounter}>{champ.name} é fraco contra</Text>
        <Text style={styles.textcounter}>{champ.name} é forte contra</Text>
      </View>

      <View style={{flexDirection: 'row', maxHeight: '90%', marginLeft:20, marginRight:20,}}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={fracoContra}
      renderItem={({item})=> {
        return(
        <View style={{marginTop: 10,}}  >
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', {champ: item})} style={styles.button}>
            <Image style={styles.counterimage} source={item.image}/>
            <Text style={styles.textdetails}>{item.name}</Text>
          </TouchableOpacity>
        </View>
        )
      }}
      keyExtractor={(elemento) => String(elemento.key)}
      />
      
      <View style={{}}>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={forteContra}
      renderItem={({item})=> {
        return(
        <View style={{marginTop: 10,}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', {champ: item})} style={styles.button}>
            <Image style={styles.counterimage} source={item.image}/>
            <Text style={styles.textdetails}>{item.name}</Text>
          </TouchableOpacity>
        </View>
        )
      }}
      keyExtractor={(elemento) => String(elemento.key)}
      />
      </View>
      </View>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.9,
  },
  view:{
    margin: 20,
    flexDirection: 'row',
    backgroundColor: '#483d8b',
    borderRadius: 44/2,
    
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 44 /2,
    marginRight: 20,
  },
  text:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  details:{
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 270,
  },
  bordao:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  textdetails:{
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 4,
  },
  textcounter:{
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dano:{
    backgroundColor: 'chocolate',
  },
  funcao:{
    backgroundColor: 'purple',
  },
  rotas:{
    backgroundColor: 'green',
  },
  container2: {
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#483d8b',
    padding: 10,
    borderRadius: 44/2,
    flex: 1,
  },
  countertext:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  counterimage:{
    width: 55,
    height: 55,
  },
  flat:{
  },
  button:{
    flexDirection: 'row',
  }
})