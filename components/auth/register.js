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
  AppRegistry
} from "react-native";
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
const width = Dimensions.get("screen").width;
export default class SignUp extends Component {
    render()
    {
        
        return (
            <View style={styles.container}>
                <View style={styles.registerForm}>
                    <View><Text style={styles.title}>Đăng kí tài khoản</Text></View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput placeholder="Your email.." style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput placeholder="Your password.." style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Repeat Password</Text>
                        <TextInput placeholder="Confirm your password.." style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Fullname</Text>
                        <TextInput placeholder="Your fullname.." style={styles.textInput}></TextInput>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00d2ff",
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
        color: "gray",
        paddingTop:15,
       
    },
    textInput:{
        width: "60%",
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