
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
import { Actions } from "react-native-router-flux";

const Index = () =>{
    return (
        <View style={styles.index}>
            <Image style={styles.backgroundImage} source={require("../assets/img/backgroud/pexels-1379617.jpg")}>
            </Image>
            <View style={styles.title}><Text style={styles.textTitle}>Goodlucky !</Text></View>
            <View style={styles.row}>
                <View style={styles.btnContainer}><Button onPress={()=>onClickListenerLogin()} style={styles.btnprimary} color="#009fff" title="Đăng nhập"/></View>
                <View style={styles.btnContainer}><Button onPress={()=>onClickListenerSignUp()} color="#0078ff" title="Đăng ký"/></View>
            </View>
            <View>
                <Button onPress={()=>onClickListenerResetPassword()} title="ResetPW"></Button>
                <Button onPress={()=>onClickListenerHomePage()} title="Hồ sơ"></Button>
                <Button onPress={()=>onClickListenerCustomerSupport()} title="Hỗ trợ khách hàng"></Button>
                <Button onPress={()=>onClickListenerQuestion()} title="Câu hỏi"></Button>
                <Button onPress={()=>onClickListenerRandom()} title="Random"></Button>
                <Button onPress={()=>onClickListenerLevel()} title="Level"></Button>
            </View>
        </View>
    );
}
const onClickListenerLevel=()=>{
    Actions.level()
}
const onClickListenerRandom=()=>{
    Actions.random()
}
const onClickListenerQuestion = ()=>{
    Actions.question()
}
const onClickListenerCustomerSupport=()=>{
    Actions.customersupport();
}
const onClickListenerLogin = ()=>{
    Actions.login();
}
const onClickListenerSignUp = ()=>{
    Actions.register();
}
const onClickListenerResetPassword = ()=>{
    Actions.resetpassword();
}
const onClickListenerHomePage = ()=>{
    Actions.homepage();
}
const styles=StyleSheet.create({
    index:{
        flex:1,
        width:"100%",
        height:"100%",
        justifyContent:"center",
        position:"absolute"
    },
    backgroundImage:{
        flex:1,
        width:"100%",
        height:"100%",

    },
    btnprimary:{
        flex:1,
        textAlign:"center",
    
    },
    row:{
        flexDirection:"row",
        textAlign:"center",
        opacity:0.8,
        position:"absolute"
    },
    btnContainer:{
        flex:1,
        marginRight:15,
        marginLeft:15,
        marginTop:5,
        marginBottom:5,
        width:"100%",
        
    },
    title:{
        textAlign:"center",
        position:"absolute",
        marginTop:"100%",
        
    },
    textTitle:{
        textTransform:"uppercase",
        fontSize:30,
        color:"white",
        textAlign:'center',
        marginTop:"250%",
        width:"100%",
        marginLeft:"25%"
    }
});
export default Index;