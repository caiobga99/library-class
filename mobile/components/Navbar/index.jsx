import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  JustAnotherHand_400Regular,
} from "@expo-google-fonts/just-another-hand";
export default function Navbar() {
  let [fontsLoaded] = useFonts({
    JustAnotherHand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.navbar}>
        <View>
          <Text style={styles.text}>LibraryClass</Text>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/splash.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000000",
  },
  logo: {
    width: 200,
    height: 400,
  },
  text: {
    fontSize: 52,
    color: "#36A9A9",
    fontFamily: "JustAnotherHand_400Regular",
  },
  
});
