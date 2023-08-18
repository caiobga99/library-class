import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import { TemaProvider } from "./common/Tema";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./pages/Cadastro";
const MyRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <TemaProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }  }>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </TemaProvider>
    </NavigationContainer>
  );
};

export default MyRoutes;
    