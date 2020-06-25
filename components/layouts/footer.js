import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Footer = () =>{
    return (
        <View style={styles.container}>
            <Image style={styles.w15}
                    source={require("../../assets/img/Golden_Star_PNG_Clip_Art_Image.png")}    
            ></Image>           
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        textAlign:"center"
    },
    w15:{
        width:"15%"
    }
})