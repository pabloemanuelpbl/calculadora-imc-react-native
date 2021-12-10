import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default function(props){
    return(
        <View style={stylles.titulo}>
            <TouchableHighlight onPress={()=>props.calcFunct()}>
                <Text style={{
                    color:"white",
                    backgroundColor:"#048",
                    textAlign:"center",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%",
                    padding:10,
                    textTransform:'uppercase',
                    borderRadius:20
                    }}
                >Calcular IMC</Text>
            </TouchableHighlight>
        </View>
    )
}

const stylles = StyleSheet.create({
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
  });
  