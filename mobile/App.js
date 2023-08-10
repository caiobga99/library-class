import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MyRoutes from "./routes";

export default function App() {
  return (
    <>
      <Navbar />
      <MyRoutes />
    </>
  );
}
