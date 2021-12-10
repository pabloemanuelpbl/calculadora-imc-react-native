import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';
//importar componentes
  import Peso from './componentes/Peso';
  import Altura from './componentes/Altura';
  import BtnCalcular from './componentes/btnCalcular';
  import Resultado from './componentes/Resultado';

export default function App() {
  
  //states
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0); // <== resultado
  //funcao
    function calcImc(){
      //validação
      if(peso == 0 || !peso ){
        alert('informe o peso')
        setResultado(" ")
        return
      }else if(altura == 0 || !altura ){
        alert('informe a altura')
        setResultado(" ")
        return 
      }else{
        console.log("...OK validado!")  //validação de segurança ok
        const r=peso/(Math.pow(altura,2)) //eleva ao quadrado
        setResultado(r.toFixed(1))  //uma casa decimal
      }
    }


  return (
  <SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={styles.titulo}>
        <Text style={{fontSize:30, fontStyle:'italic'}}>Vamo po trampo Boy</Text>
      </View>
      <Peso peso={peso} setPeso={setPeso} />
      <Altura altura={altura} setAltura={setAltura}/>
      <BtnCalcular calcFunct={calcImc}/>
      <Resultado resultado={resultado}/>
    </SafeAreaView>
    <View>
      <Image
        style={styles.tabela}
        source={{uri:"https://reactnative.dev/img/tiny_logo.png"}}
      />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  tabela:{
    resizeMode:'contain',
    height:100
  }
});
