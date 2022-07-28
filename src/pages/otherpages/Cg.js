import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function Cg({route}) {
    const cg = route.params.cg;
    
 return (
    
   <ScrollView style={styles.container}>
    <View style={styles.image}>
        <Image style={styles.image} source={cg.image}/>
    </View>

    <View style={styles.dicas}>
        <Text style={styles.text}>
            Informações:
        </Text>
        <Text style={styles.text2}>
        {cg.description}
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