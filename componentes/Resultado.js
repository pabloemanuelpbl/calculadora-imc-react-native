import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function(props){
    return(
        <View>
            <Text>Resultado:</Text>
            <Text>{props.resultado}</Text>
        </View>
    )
}
