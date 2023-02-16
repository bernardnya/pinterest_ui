import React from "react";

import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Pins from "../../Components/Pins";
import pins from "../../assets/data/pins";
const Homescreen = () => {
  return (
    <ScrollView contentContainerStyle={{marginTop:20}}>
      <View style={styles.container}>
        {/*Pins columb 1*/}
        <View style={{ backgroundColor: "white", flex: 1 }}>
          {/* <Pins pin={pins[0]}/>*/}

          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pins pin={pin}  key={pin.id}/>
            ))}
        </View>
        {/*Pins columb 2*/}
        <View style={{ backgroundColor: "white", flex: 1 }}>
          {/* <Pins pin={pins[1]}/> */}
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pins pin={pin} key={pin.id}/>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    //marginTop:20
    flexDirection: "row",
  },
});

export default Homescreen;
