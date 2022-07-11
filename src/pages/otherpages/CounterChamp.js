import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';

export default function CounterChamp({route}) {
  const champ = route.params.champ;
 return (
   <ScrollView style={styles.container}>

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
      <View>
      <Text style={styles.countertext}>{champ.name} é fraco contra</Text>

      </View>

      <View>
      <Text style={styles.countertext}>{champ.name} é fraco contra</Text>
      
      </View>
    
    </View>

   </ScrollView>
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
    backgroundColor: '#191970',
    borderRadius: 44/2
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
  dano:{
    backgroundColor: 'chocolate',
  },
  funcao:{
    backgroundColor: 'purple'
  },
  rotas:{
    backgroundColor: 'green',
  },
  container2: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 20, marginBottom: 20, 
    marginLeft: 40, 
    marginRight: 40,
  },
  countertext:{
    color: '#fff',
    fontWeight: 'bold',
  }
})