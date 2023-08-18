import { TemaContext } from "../../common/Tema";
import { useContext } from "react";

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import {
  useFonts,
  JustAnotherHand_400Regular,
} from "@expo-google-fonts/just-another-hand";
import { JosefinSlab_400Regular } from "@expo-google-fonts/josefin-slab";

export default function Home({navigation}) {
  const { tema, setTema, corLetra, setCorLetra } = useContext(TemaContext);

  let [fontsLoaded] = useFonts({
    JustAnotherHand_400Regular,
    JosefinSlab_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Onde você pode ser você mesmo</Text>
      </View>
      <View style={styles.circle_group}>
        <View style={styles.circle}>
          <Image
            style={[styles.image, {}]}
            source={require("../../assets/pilha-de-tres-livros1.png")}
          />
        </View>
        <View style={styles.circle}>
          <Image
            style={[
              styles.image,
              {
                width: Dimensions.get("window").width * 0.24,
              },
            ]}
            source={require("../../assets/campanha-digital1.png")}
          />
        </View>
      </View>
      <View style={styles.foot}>
        <View>
          <Text
            style={[
              styles.text,
              {
                fontFamily: "JosefinSlab_400Regular",
                fontSize: 23,
              },
            ]}
          >
            Faça seu login aqui
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button_entrar} activeOpacity={0.7} onPress={()=>{navigation.navigate("Cadastro")}}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  circle_group: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    height: 312,
    gap: 23,
  },
  circle: {
    backgroundColor: "#36A9A9",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.32,
    height: Dimensions.get("window").width * 0.32,
    alignItems: "center",
    justifyContent: "center",
  },
  button_entrar: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#36A9A9",
    padding: 1,
    borderWidth: 1,
    width: Dimensions.get("window").width * 0.34,
    height: Dimensions.get("window").height * 0.08,
    borderRadius: 100,
  },
  foot: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: Dimensions.get("window").width * 0.28,
    height: Dimensions.get("window").height * 0.14,
  },
  text: {
    fontSize: 47,
    color: "#36A9A9",
    fontFamily: "JustAnotherHand_400Regular",
  },
  textButton: {
    fontSize: 39,
    padding: 5,
    color: "#36A9A9",
    fontFamily: "JustAnotherHand_400Regular",
  },
  textEntrar: {
    fontFamily: "JosefinSlab_400Regular",
  },
});
