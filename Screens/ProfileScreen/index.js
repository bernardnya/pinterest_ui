import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Pressable,
  } from "react-native";
import MasonaryList from "../../Components/MansoryList";
import pins from "../../assets/data/pins";
import { Feather ,Entypo} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const ProfileScreen = ()=>{
    const navigation = useNavigation();

    const goToNext = ()=>{
        navigation.navigate("Create")
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.icons}>
            <AntDesign name="plussquareo" size={24} color="black"style={styles.icon} onPress={goToNext} />
                <Feather name="share" size={24} color="black" style={styles.icon}/>
                <Entypo name="dots-three-horizontal" size={24} color="black" style={styles.icon}/>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
            <Image
                source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/9.jpeg"}}
                style={styles.image}
            />
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.subtitle}>10K followers | 50 Following</Text>

            </View>
           <MasonaryList pins={pins}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      //alignItems: "center",
      //justifyContent: "center",

    },
    image:{
        width:160,
        aspectRatio:1,
        borderRadius:200,
        marginVertical:10
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:10
    },
    subtitle:{
        color:"#181818",
        fontWeight:"600",
        padding:10
    },
    header:{
        alignItems:'center'
    },
    icons:{
        flexDirection:'row',
        alignSelf:'flex-end',
        padding:10

    },
    icon:{
        paddingHorizontal:10
    }

  });
  
export default ProfileScreen;