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

const CustomerSupport = ()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hỗ trợ khách hàng</Text>
            <Text style={styles.label}>Tiêu đề</Text>
            <TextInput style={styles.textInput}></TextInput>
            <Text style={styles.label}>Nội dung chính</Text>
            <TextInput style={styles.textInput1} multiline={true}></TextInput>
            <View style={styles.textCenter}>
                <View style={styles.w150}><Button style={styles.btnPrimary} title="Send"></Button></View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
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
      textInput1:{
        width:"100%",
        height:100,
        borderColor:"#0f62fe",
        borderRadius:5,
        borderWidth:1,
        color:"black",
        fontSize:16,
        marginBottom:25
      },
      textCenter:{
          flex:1,
          width:"100%",
          alignItems:"center",
          
      },
      btnPrimary:{
          width:100,
          textAlign:"center",
          fontSize:18,
          textTransform:"uppercase",
          color:"#0f62fe",
          
      },
      w150:{
        width:150,
      },
});
export default CustomerSupport;