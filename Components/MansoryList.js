import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions
} from "react-native";
//import pins from "../assets/data/pins";
import Pins from "./Pins";

const MasonaryList = ({pins, }) => {
  //const numRows=2;
  //const [numRows, setNumRows] = useState(2);
  const width = useWindowDimensions().width;

  // get screen width to calc n get the numRos
  const numColumbs = Math.ceil(width /350) //
  return (
    <ScrollView contentContainerStyle={{ marginTop: 20 }}>
      <View style={styles.container}>
        {/* dynamically pass columb base on numRows */}
        {Array.from(Array(numColumbs)).map((_, colIndex) =>(
          <View style={{ backgroundColor: "white", flex: 1 }}>
          {pins
            .filter((_, index) => index % numColumbs === colIndex)
            .map((pin) => (
              <Pins pin={pin} key={pin.id} />
            ))}
        </View>
        ))}
        {/*Pins columb 1*/}
        
        {/*Pins columb 2*/}
        {/* <View style={{ backgroundColor: "white", flex: 1 }}>
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pins pin={pin} key={pin.id} />
            ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
});

export default MasonaryList;
