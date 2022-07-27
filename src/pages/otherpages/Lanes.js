import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function Lanes({route}) {
    const lanes = route.params.lanes;
    
 return (
    
   <ScrollView style={styles.container}>
    <View style={styles.image}>
        <Image style={styles.image} source={require('../../assets/images/campeoeslol.png')}/>
    </View>

    <View style={styles.rota}>
        <Image style={{width: 75, height: 75, marginRight: 20,}} source={lanes.image}/>
        <Text style={styles.lanetitle}>
            {lanes.name}
        </Text>
    </View>

    <View style={styles.dicas}>
        <Text style={styles.text}>
            Resumo:
        </Text>
        <Text style={styles.text2}>{lanes.inicio}</Text>
    </View>

    <View style={styles.dicas}>
        <Text style={styles.text}>
            Feitiços de Invocador:
        </Text>
        <Text style={styles.text2}>
        {lanes.feiticos}
        </Text>
    </View>

    <View style={styles.dicas}>
        <Text style={styles.text}>
            Dicas:
        </Text>
        <Image style={styles.image} source={lanes.image2}/>
        <Text style={styles.text2}>
        {'\n'}{lanes.dicas}
        </Text>
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
    image:{
        width: '100%',
        height: 200,
    },
    lanetitle:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    rota:{
        flex: 1,
        backgroundColor: '#483d8b',
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    text:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 5,
        marginBottom: 20,
        textAlign: 'center',
    },
    text2:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
        borderRadius: 5,
        marginBottom: 20,
        textAlign: 'center',
    },
    dicas:{
        backgroundColor: '#483d8b',
        margin: 20,
    }
})