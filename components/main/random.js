import React, { Component , useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  AppRegistry,
  Button
} from "react-native";

const Random=()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Random</Text>
            <View style={styles.subContainer}>
                <Text style={styles.textContent}>1. Red</Text>
                <Text style={styles.textContent}>2. Blue</Text>
                <Text style={styles.textContent}>3. Green</Text>
            </View>
            <View style={styles.w100}>
                <View style={styles.w150}><Button style={styles.btnPrimary} title="Random" ></Button></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
      },
      title:{
        width:"100%",
        color:"white",
        fontSize:20,
        textAlign:"center",
        backgroundColor:"#21B6A8",
        padding:15,
        marginTop:25
      },
      subContainer:{
          margin:15,
          padding:15,
          borderRadius:15,
          borderWidth:1,
          borderColor:"#d7d7d7",
          flex:3
      },
      w100:{
        flex:1,
        width:"100%",
        alignItems:"center"
      },
      w150:{
        width:150,
        
      },
      btnPrimary:{
        width:100,
        textAlign:"center",
        fontSize:18,
        textTransform:"uppercase",
        color:"#0f62fe",
        borderRadius:20,
        borderColor:"#0f62fe",
        borderWidth:1
    },
    textContent:{
        fontSize:16,
        color:"black",
        margin:5,
        width:"100%"
    }
})
export default Random