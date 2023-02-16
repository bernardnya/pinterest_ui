import React from "react";

import { View, Text, Image, StyleSheet,ScrollView } from "react-native";
import Pins from "../../Components/Pins";

const Homescreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/*Pins */}
      <Pins
         pin={{
            title:"First Ttile",
        image:
          "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"
        
        }}
      />
      <Pins
        pin={{
            title:"Second Ttile",
        image:
          "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg"
        
        }}
        
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop:20
  },
});

export default Homescreen;
