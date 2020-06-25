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


const Forgot = () =>{
        return (
            <View style={styles.container}>
                    <View style={styles.col}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput placeholder="Nhập email của bạn..." style={styles.textInput}></TextInput>
                    </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: "#00d2ff",
      justifyContent: "center",
    },
    header: {
      flex: 1,
    },
    footer: {
      flex: 1,
      padding: 20,
    },
    imageBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position:"absolute",
      
    },
    registerForm:{
        height:"75%",
        backgroundColor: "white",
        // opacity:1,
        width:"100%",
        padding: 20,
        textAlign: "center"
    },
    label:{
        width: "30%",
        textAlign: "center",
        borderColor: "black",
        marginTop: 5,
        paddingBottom: 5,
        color: "black",
        paddingTop:15,
       
    },
    textInputForgot:{
        width: "100%",
        paddingLeft:10,
        paddingTop:5,
        borderColor: "black",
        marginTop: 5,
        paddingBottom: 5,
        color: "gray",
        borderWidth:1,
        borderColor:"#d7d7d7",
        borderRadius:5
    },
    textInput:{
        width: "60%",
        paddingLeft:10,
        paddingTop:5,
        borderColor: "black",
        marginTop: 5,
        paddingBottom: 5,
        color: "gray",
        borderWidth:2,
        borderColor:"#00d2ff",
        borderRadius:5
    },
    textCenter:{
        width: "50%",
        textAlign: "center",
        borderColor: "black",
        marginTop: 5,
        paddingBottom: 5,
        color: "gray"
    },  
    title:{
        borderBottomColor:"#d7d7d7",
        borderBottomWidth:1,
        color:"black",
        width:"100%",
        fontWeight:"bold",
        fontSize: 20,
        height:"auto",
        alignItems:"center",
        textAlign: "center",
        width: "100%",
        marginBottom: 20,
        paddingBottom:10
    },
    col:{
        flexDirection:"row"
    }
  });

  export default Forgot;