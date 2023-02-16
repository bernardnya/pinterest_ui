import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Homescreen from "./Screens/Homescreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Homescreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //marginTop:40,
    // alignItems: 'center',
    // justifyContent: "center",
  },
});
