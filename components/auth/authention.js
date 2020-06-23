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
import { TypingAnimation } from 'react-native-typing-animation';

import propAuth from "../../services/auth/selector";
import Dialog from "react-native-dialog";
import { AuthentionRequest,SendOTP  } from "../../services/auth/action";
import { useDispatch } from "react-redux";
import { Actions } from "react-native-router-flux";


const Authention  = ()=>{
  let [typing_email , setType_email ] = useState(false);
  const width = Dimensions.get("screen").width;
  let [sending,setSending] = useState(false),
  [otp,setOTP] = useState("");

  const dispatch = useDispatch();
  let authProps = propAuth().auth;

  const _foucus = (value)=> {
    if (value == "otp") {
      setType_email(true);
    }
  }
  // hideNavBar={true} 
  const _animation = ()=> {
    Animated.timing(new Animated.Value(width - 40), {
      toValue: 40,
      duration: 250,
    }).start();

    dispatch(AuthentionRequest(authProps.email,otp));
   
  }
  const _typing = ()=> {
    return <TypingAnimation dotColor="#93278f" style={{ marginRight: 25 }} />;
  }
  if(authProps.authention){
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
  const onRefesh = ()=>{
    dispatch({type: 'AUTH_REFESH'});
  }
  const onSendOTP =()=>{
    setSending(true)
    SendOTP(authProps.email);

    setTimeout(()=>{
     setSending(false); 
    },3000);
  }

  return (
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
            Mã OTP
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="My OTP"
              style={styles.textInput}
              onFocus={() => _foucus("otp")
              }
              onChangeText={(text)=>setOTP(text)}
            />
              {typing_email ? _typing() : null}

          </View>
          <View style={styles.action,{margin: 20}}>
            <Button title="Send OTP again" style={styles.textLogin} onPress={()=> onSendOTP()}
              disabled={sending}
            />
          </View>
          <TouchableOpacity onPress={()=>_animation()}>
            <View style={styles.button_container}>
              <Animated.View
                style={[
                  styles.animation,
                  {
                    width,
                  },
                ]}
              >
                  <Text style={styles.textLogin}>Xác nhận</Text>
              </Animated.View>
            </View>
          </TouchableOpacity>

        </View>
    );
  
}

export default Authention;


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
