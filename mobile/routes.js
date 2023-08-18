import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home";
import { TemaProvider } from "./common/Tema";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./pages/Cadastro";
const MyRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <TemaProvider>
<<<<<<< HEAD
        <Stack.Navigator screenOptions={{ headerShown: false }  }>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
=======
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
>>>>>>> 124feb54bd60040b935d54bab86373c567fba6b2
      </TemaProvider>
    </NavigationContainer>
  );
};

export default MyRoutes;
    