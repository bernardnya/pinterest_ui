import React, { useState, useEffect } from "react";

import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pins = (props) => {
  const { title, image } = props.pin;
  const [ratio, setRatio] = useState(1);

  {
    /* calcu the aspectRatio of image as component mounts*/
  }
  useEffect(() => {
    // if image exists
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View style={styles.pin}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable style={styles.likebtn}>
          <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  pin: {
    width: "100%",
    padding:5
  },
  image: {
    width: "100%",
    borderRadius: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    lineHeight:20,
    color:"#181818",
  },
  likebtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#d3cfd4",
    padding: 5,
    borderRadius: 20,
  },
});
export default Pins;
