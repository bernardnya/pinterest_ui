import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Homescreen from "./Screens/Homescreen";
import Detailscreen from './Screens/DetailsScreen';
import MainNavigation from './Navigations/mainNavigations';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <MainNavigation/>
    </SafeAreaProvider>
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
