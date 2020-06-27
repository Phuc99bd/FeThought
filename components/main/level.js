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
  Button,
  Image
} from "react-native";

const Level = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Level</Text>
            <View style={styles.subContainer}>
                <View style={styles.levelContainer}>
                    <Image style={styles.levelimg} source={require("../../assets/img/gradient/green.png")}></Image>
                    <Text style={styles.levelText}>easy</Text>
                </View>
                <View style={styles.levelContainer}>
                    <Image style={styles.levelimg} source={require("../../assets/img/gradient/blue.png")}></Image>
                    <Text style={styles.levelText}>medium</Text>
                </View>
                <View style={styles.levelContainer}>
                    <Image style={styles.levelimg} source={require("../../assets/img/gradient/red.png")}></Image>
                    <Text style={styles.levelText}>difficult</Text>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
    },
    title:{
        width:"100%",
        color:"white",
        fontSize:20,
        textAlign:"center",
        backgroundColor:"#21B6A8",
        padding:15,
        marginTop:25
    },
    subContainer:{
        margin:15,
        flex:1,
        alignItems:"center",
    },
    levelimg:{
        width:"100%",
        position:"absolute",
        height:75
    },
    levelText:{
        textTransform:"uppercase",
        fontSize:20,
        
    },
    levelContainer:{
        height:75,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:15,
        marginBottom:15
    }
})
export default Level