
import { TemaContext } from '../../common/Tema';
import { View,Text,TouchableOpacity,StyleSheet  } from 'react-native';
import React, { useContext } from 'react'
import {
    useFonts,
    JustAnotherHand_400Regular,
  } from "@expo-google-fonts/just-another-hand";
  import { JosefinSlab_400Regular } from "@expo-google-fonts/josefin-slab";


export default function Cadastro(navigation){
''
    const {tema,setTema,corLetra,setCorLetra} =useContext(TemaContext);
    let [fontsLoaded] = useFonts({
        JustAnotherHand_400Regular,
        JosefinSlab_400Regular,
      });
    
      if (!fontsLoaded) {

        return null;
      }
    return (
        <View>
            <Text>  </Text>
      
        <View>
        <TouchableOpacity style={styles.button_facebook} activeOpacity={0.7} onPress={()=>{navigation.navigate("Cadastro")}}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
}
      <View>
      <TouchableOpacity style={styles.button_facebook} activeOpacity={0.7} onPress={()=>{navigation.navigate("Cadastro")}}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
   </View>

const styles = StyleSheet.create({
button_facebook: {
alignItems: "center",
justifyContent:"baseline",
},
textButton: {
  fontSize: 39,
  padding: 5,
  color: "#36A9A9",
  fontFamily: "JustAnotherHand_400Regular",
}

})