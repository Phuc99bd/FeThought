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
                            <View>
                <ImageBackground
                    source={require("../../assets/background.png")}
                    style={styles.imageBackground}
                >
                </ImageBackground>
            </View>
            <View style={styles.registerForm}>
                <View><Text style={styles.title}>Đăng kí tài khoản</Text></View>
                <View >
                    <Text style={styles.textCenter}>Email</Text>
                    <TextInput placeholder="Your email.." style={styles.textCenter}></TextInput>
                </View>
                <View>
                    <Text style={styles.textCenter}>Password</Text>
                    <TextInput placeholder="Your password.." style={styles.textCenter}></TextInput>
                </View>
                <View>
                    <Text style={styles.textCenter}>Confirm Password</Text>
                    <TextInput placeholder="Confirm your password.." style={styles.textCenter}></TextInput>
                </View>
                <View>
                    <Text style={styles.textCenter}>Fullname</Text>
                    <TextInput placeholder="Your fullname.." style={styles.textCenter}></TextInput>
                </View>
                <View>
                    <Text style={styles.textCenter}>Phone</Text>
                    <TextInput placeholder="Your number phone.." style={styles.textCenter}></TextInput>
                </View>
                <View>
                    <Text style={styles.textCenter}>Address</Text>
                    <TextInput placeholder="Your address.." style={styles.textCenter}></TextInput>
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
        width:"100%",
        padding: 20,
        textAlign: "center"
    },
    textCenter:{
        width: "100%",
        textAlign: "center",
        borderColor: "black",
        marginTop: 5,
        paddingBottom: 5,
        color: "gray"
    },  
    title:{
        color:"black",
        width:"100%",
        fontWeight:"bold",
        fontSize: 20,
        height:"auto",
        alignItems:"center",
        textAlign: "center",
        width: "100%",
        marginBottom: 20
    }
  });