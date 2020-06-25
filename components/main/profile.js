

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

const Profile = () =>{
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.w25}>
          <Text style={styles.label}>Email</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput style={styles.textInput} placeholder="..."></TextInput>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row:{
    flexDirection:"row"
  },
  w25:{
    width:"30%",
    paddingLeft:15,
    paddingBottom:5,
    paddingTop:5,
    paddingRight:15,
  },
  w75:{
    width:"70%",
    paddingLeft:15,
    paddingBottom:5,
    paddingTop:5,
    paddingRight:15,
  },
  label:{
    color:"black",
    fontSize:16,
  },
  textInput:{
    color:"#d7d7d7",
    borderRadius:5,
    // borderColor:"#009fff",/
    borderWidth:1,
    flex:1,
    paddingRight:25
  }
});
export default Profile;
