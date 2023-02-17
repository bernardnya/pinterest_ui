import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function CreatePins() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [title, setTitle] = useState("");

  const onSubmit =()=>{
    
  }

  return (
    <View style={styles.container}>
      <Button title="Pick your pin" onPress={pickImage} />
      {image && (
        <>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 300 }}
          />

          <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="pin title.."
            style={styles.input}
          />
        </>
      )}
      <Button title="Submit Pin" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
});
