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

const Question = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.question}>Question 1 : What are you doing at the moment?</Text>
            <View style={styles.answerContainer}>
                <Text style={styles.answer}>A. I'm doing my home work.</Text>
                <Text style={styles.answer}>B. I'm playing game.</Text>
                <Text style={styles.answer}>C. I'm working my task.</Text>
                <Text style={styles.answer}>D. I'm playing football.</Text>
            </View>
            <View style={styles.w100}>
                <View style={styles.w30}><Button title="Quay lại"></Button></View>
                <View style={styles.w40}></View>
                <View style={styles.w30}><Button title="Tiếp"></Button></View>
            </View>
        </View>
    );
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
    question:{
        width:"100%",
        fontSize:20,
        textAlign:"center",
        paddingTop:5,
        minHeight:20,
        margin:15
    },
    answerContainer:{
        padding:15,
        
    },
    answer:{
        padding:15,
        borderColor:"#0f62fe",
        borderWidth:1,
        borderRadius:5,
        fontSize:16,
        margin:15,
        color:"black"

    },
    w100:{
        width:"100%",
        flexDirection:'row'
    },
    w30:{
        width:"30%"
    },
    w40:{
        width:"40%"
    }
})
export default Question