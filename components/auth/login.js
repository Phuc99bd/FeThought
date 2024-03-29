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
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
import { Actions } from "react-native-router-flux";
import Authention from "./authention";
import {  useState } from "react";
import { LoginRequest  } from "../../services/auth/action";
import { useDispatch } from "react-redux";
import propAuth from "../../services/auth/selector";
import Dialog from "react-native-dialog";


const Login= ()=>{
  // init state in component login
  let [email,setEmail] = useState(""),
   [password,setPassword] = useState(""),
   [typing_email , setType_email ] = useState(false),
   [typing_password , setType_password ] = useState(false)

  let dispatch = useDispatch();
  // state gobal
  let authProps = propAuth().auth;

  const onLogin = ()=>{

    Animated.timing(new Animated.Value(width - 40), {
      toValue: 40,
      duration: 250,
    }).start();
    // call function in file actions
    dispatch(LoginRequest(email,password));
  }
  const onRefesh = ()=>{
    dispatch({type: 'AUTH_REFESH'});
  }
  if(authProps.authention){
    // change view
    Actions.register();
  }
  const showToast = () => {
    let message="";
    if(authProps.error){
      if(authProps.error == "error"){
        message = authProps.message;
      }
      else{
          authProps.error.map(e=>{
            message+= `${e}\n`
          });
      }

    return (
      <Dialog.Container visible={authProps.login}>
        <Dialog.Title>Error</Dialog.Title>
        <Dialog.Description>
          {message}
        </Dialog.Description>
        <Dialog.Button label="Ok" onPress={()=> onRefesh()}/>
      </Dialog.Container>
    )
    }
  };

  const  _typing = ()=> {
    return <TypingAnimation dotColor="#93278f" style={{ marginRight: 25 }} />;
  }

  const onFocus = (name)=>{
    if(name == "email"){
      setType_email(true);
      setType_password(false);
    }
    else{
      setType_email(false);
      setType_password(true);
    }
  }

  const onSignUp = ()=>{
    Actions.register();
  }
  const onForgot = () =>{
    Actions.forgot();
  }
  const onProfile = () =>{
    Actions.profile();
  }
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require("../../assets/background.png")}
            style={styles.imageBackground}
          ></ImageBackground>

          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Thought Flash
          </Text>
          <Text
            style={{
              color: "red",
              textAlign: "center",
              fontSize: 20
            }}
          >
            Sign in to continute
          </Text>
        </View>
        {authProps.success ? <Authention></Authention> :
        <View style={styles.footer}>
          {authProps.login ? showToast() : null}

          <Text
            style={[
              styles.title,
              {
                marginTop: 50,
              },
            ]}
          >
            E-mail
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your email.."
              style={styles.textInput}
              onChangeText={(text)=> setEmail(text) }
              onFocus={()=>onFocus("email")}
            />
            {typing_email ? _typing() : null}
          </View>

          <Text
            style={[
              styles.title,
              {
                marginTop: 20,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <TextInput
              secureTextEntry
              placeholder="Your password.."
              style={styles.textInput}
              onChangeText={(text)=> setPassword(text)}
              onFocus={()=>onFocus("password")}
            />
            {typing_password ? _typing() : null}
          </View>

          <TouchableOpacity onPress={()=>onLogin()}>
            <View style={styles.button_container}>
              <Animated.View
                style={[
                  styles.animation,
                  {
                    width,
                  },
                ]}
              >
                { !authProps.login ? (
                  <Text style={styles.textLogin}  >Login</Text>
                ) : (
                  <Animatable.View animation="bounceIn" delay={50}>
                    <FontAwesome name="check" color="white" size={20} />
                  </Animatable.View>
                )}
              </Animated.View>
            </View>
          </TouchableOpacity>

          <View style={styles.signUp}>
            <Text style={{ color: "blue" }} onPress={()=>onForgot()}>Forgot password?</Text>
            <Text style={{ color: "blue" }} onPress={()=> onSignUp()}> Sign up?</Text>
            <Text onPress={()=>onProfile()}>profile</Text>
          </View>
        </View>
        }
     </View>
    );
}

export default Login;

const width = Dimensions.get("screen").width;

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
    flex: 2,
    padding: 20,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: "gray",
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    backgroundColor: "#93278f",
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

