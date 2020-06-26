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

const ResetPassword = ()=>{
    return (
        <View style={styles.container}>
          <View><Text style={styles.title}>Reset Mật khẩu</Text></View>
          
            <View>
              <Text style={styles.label}>Mã OTP</Text>
            </View>
              <TextInput style={styles.textInput}></TextInput>
              <Text style={styles.label}>Mật khẩu mới</Text>
              <TextInput style={styles.textInput}></TextInput>
              <Text style={styles.label}>Nhập lại mật khẩu mới</Text>
              <TextInput style={styles.textInput}></TextInput>
              <View style={styles.textCenter}>
                <View style={styles.w150}><Button styles={styles.btnPrimary} title="Reset Mật khẩu"></Button></View>
              </View>
        </View>
    );
}
const styles=StyleSheet.create({
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
    fontSize:16
  },
  container:{
    flex:1,
    paddingTop:25,
    paddingLeft:25,
    paddingRight:25,
    backgroundColor:"#FFF",
    width:"100%",
    // height:"100%"
  },
  textCenter:{
    textAlign:"center",
    width:"100%",
    marginTop:25,
    marginLeft:"30%"
  },
  w150:{
    width:150
  },
  btnPrimary:{
    
    color:"#FFF",
    fontSize:16,
    fontWeight:"bold",
  }
})
export default ResetPassword;