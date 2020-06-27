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
import { Avatar } from 'react-native-elements';

const HomePage = ()=>{
    return (
        <View>
            <View style={styles.Center}><Avatar size="xlarge" rounded source={require("../../assets/img/icon.png")} ></Avatar></View>
            <View style={styles.CenterButton}>
                <View style={styles.w150}><Button styles={styles.btnPrimary} title="Random"></Button></View>
                <View style={styles.w150}><Button styles={styles.btnPrimary} title="Thi thử"></Button></View>
            </View>
            
        </View>
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    firstfloor:{
        position:"absolute",
        flex:1,
        paddingTop:25,
        paddingBottom:25
    },
    secondfloor:{
        position:"absolute",
        flex:2,
        paddingTop:"30%"
    },
    avatar:{
        flex:1,
        textAlign:"center"
    },
    textCenter:{
        marginTop:30,
        textAlign:"center",
        width:"100%",
        marginTop:25,
        marginLeft:"40%"
      },
    w150:{
        marginTop:15,
        width:150,
        height:50
      },
    btnPrimary:{
        color:"#FFF",
        fontSize:16,
        fontWeight:"bold",
    },
    Center:{
        alignItems:"center",
        paddingTop:25,
        paddingBottom:25,
        borderBottomColor:"#d7d7d7",
        borderBottomWidth:2
    },
    CenterButton:{
        alignItems:"center",
        paddingTop:25,
    }


});
export default HomePage;
