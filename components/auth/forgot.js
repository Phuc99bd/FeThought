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
import { Actions } from "react-native-router-flux";

const Forgot = () =>{
        return (
          <View style={styles.container}>
          <View><Text style={styles.title}>Quên mật khẩu</Text></View>
              <Text style={styles.label}>Nhập email tài khoản</Text>
              <TextInput style={styles.textInput}></TextInput>
              <View style={styles.textCenter}>
                <View style={styles.w150}><Button onPress={()=>onClickListenerResetPassword()} styles={styles.btnPrimary} title="Tiếp tục"></Button></View>
              </View>
        </View>
        );
}
const onClickListenerResetPassword = ()=>{
  Actions.resetpassword();
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:25,
    paddingLeft:25,
    paddingRight:25,
    backgroundColor:"#FFF",
    width:"100%",
  },
  title:{
    width:"100%",
    color:"#0f62fe",
    fontSize:30,
    textAlign:"center",
    marginBottom:15,
    marginTop:25
  },
  label:{
    width:"100%",
    height:30,
    fontSize:16,
    color:"black",
    marginTop:10
  },
  textInput:{
    width:"100%",
    height:50,
    borderColor:"#0f62fe",
    borderRadius:5,
    borderWidth:1,
    color:"black",
    fontSize:16,
    marginBottom:25
  },
  });

  export default Forgot;