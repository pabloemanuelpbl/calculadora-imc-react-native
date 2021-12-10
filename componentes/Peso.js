import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default function(props){
    return(
    <View style={styless.titulo}>
        <Text>informe seu peso</Text>
        <TextInput
          style={styless.input}
          value={props.peso}
          autoFocus={false}
          keyboardType={'numeric'}
          onChangeText={n=>props.setPeso(n)}
        />
      </View>
    )
}

const styless = StyleSheet.create({
    container: {
      width:"100%", //espacamento lateral
      borderWidth:1,  //borda, contorno de linha
      borderColor:"#000",  //cor da borda
      padding:10,   //espacamento interno das borda e os elementos
      borderRadius:10,  //encurvamento das bordas
      //backgroundColor:"blue",  //cor
      //height:"100%" //espacamento para vertical
    },
    input:{
      borderWidth:1, //add borda, linha de contorno
      height:40,   //espacamento para vertical
      borderColor:"black",
      borderRadius:10,  //encurvar a borda
      padding:10, //espacamento interno
    },
    titulo:{
      marginBottom:20,
    },
    btnCalc:{
      //cores
        color:"white",
        backgroundColor:"#048",
      //alinhamento
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        padding:10,
      //design
        textTransform:'uppercase',
        borderRadius:20
    },
    tabela:{
      resizeMode:'contain',
      height:100
    }
  });