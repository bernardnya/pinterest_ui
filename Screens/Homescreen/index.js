import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Pins from "../../Components/Pins";
import pins from "../../assets/data/pins";
const Homescreen = () => {
  const navigation = useNavigation();
  // useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     headeright:()=>{
  //       <Pressable>
  //         <AntDesign name="user" size={24} color="black" />
  //       </Pressable>
  //     }
  //   })
  // },[])
  return (
    <ScrollView contentContainerStyle={{ marginTop: 20 }}>
      <Pressable onPress={()=>navigation.navigate("Profile")} style={{alignSelf:'flex-end', marginRight:20}}>
        <AntDesign name="user" size={30} color="black" />
      </Pressable>
      <View style={styles.container}>
        {/*Pins columb 1*/}
        <View style={{ backgroundColor: "white", flex: 1 }}>
          {/* <Pins pin={pins[0]}/>*/}

          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pins pin={pin} key={pin.id} />
            ))}
        </View>
        {/*Pins columb 2*/}
        <View style={{ backgroundColor: "white", flex: 1 }}>
          {/* <Pins pin={pins[1]}/> */}
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pins pin={pin} key={pin.id} />
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
