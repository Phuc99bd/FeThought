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
            <View>
                            <View>
                <ImageBackground
                    source={require("../../assets/icon.png")}
                    style={styles.imageBackground}
                >
                </ImageBackground>
            </View>
            <View style={styles.registerForm}>
                <View><Text style={styles.title}>Thông tin tài khoản</Text></View>
                <View>
                    <Text>Email</Text>
                    <TextInput placeholder="Your email.."></TextInput>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput placeholder="Your password.."></TextInput>
                </View>
                <View>
                    <Text>Confirm Password</Text>
                    <TextInput placeholder="Confirm your password.."></TextInput>
                </View>
                <View>
                    <Text>Fullname</Text>
                    <TextInput placeholder="Your fullname.."></TextInput>
                </View>
                <View>
                    <Text>Phone</Text>
                    <TextInput placeholder="Your number phone.."></TextInput>
                </View>
                <View>
                    <Text>Address</Text>
                    <TextInput placeholder="Your address.."></TextInput>
                </View>
            </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
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
        opacity:80,
        width:"100%"
    },
    title:{
        color:"black",
        width:"100%",
        fontWeight:"bold",
        fontSize:"14px",
        height:"auto",
        alignItems:"center"
    }
  });