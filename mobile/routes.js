import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home";
import { TemaProvider } from "./common/Tema";
import { NavigationContainer } from "@react-navigation/native";
const MyRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <TemaProvider>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </TemaProvider>
    </NavigationContainer>
  );
};

export default MyRoutes;
