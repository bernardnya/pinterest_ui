import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import pins from "../../assets/data/pins";
import { useNavigation,useRoute } from "@react-navigation/native";

const Detailscreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  //access pin ID from route
  const PinId = route.params.id;

  // we find the pin from data whose ID matches that from route
  const pin = pins.find((p)=> p.id ===PinId);

  //const pin = pins[3];
  const [ratio, setRatio] = useState(1);

  // get the distance from top of screen
  const Insets = useSafeAreaInsets();

  useEffect(() => {
    // if image exists
    if (pin.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin.image]);

  const GoBack = () => {
    navigation.goBack();
  };

  if(!pin){
    return (
      <Text>Selected pin is not found</Text>
    )
  }
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Text style={styles.title}>{pin.title}</Text>
      </View>
      <Pressable
        onPress={GoBack}
        style={[styles.backBtn, { top: Insets.top + 20 }]}
      >
        <Ionicons name="chevron-back-circle-outline" size={35} color="white" />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex:1,
    marginTop: 30,
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 25,
  },
  backBtn: {
    position: "absolute",
    left: 20,
  },
});

export default Detailscreen;
