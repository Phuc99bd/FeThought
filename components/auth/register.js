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
  AppRegistry,
  Button,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";


const Register = () =>{
    return (
        <View style={styles.index}>
            <Image style={styles.backgroundImage} source={require("../../assets/img/backgroud/register.jpg")}></Image>
            <View style={styles.frmRegister}>
                <View style={styles.row}>
                    <View style={styles.w25}>
                        <Text style={styles.label}>Họ và tên</Text>
                    </View>
                    <View style={styles.w75}>
                        <TextInput style={styles.textInput} placeholder="Nhập họ và tên của bạn..."></TextInput>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.w25}>
                        <Text style={styles.label}>Email</Text>
                    </View>
                    <View style={styles.w75}>
                        <TextInput style={styles.textInput} placeholder="Nhập email của bạn..."></TextInput>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.w25}>
                        <Text style={styles.label}>Tài khoản</Text>
                    </View>
                    <View style={styles.w75}>
                        <TextInput style={styles.textInput} placeholder="Nhập Tên tài khoản của bạn..."></TextInput>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.w25}>
                        <Text style={styles.label}>Mật khẩu</Text>
                    </View>
                    <View style={styles.w75}>
                        <TextInput style={styles.textInput} placeholder="Nhập mật khẩu của bạn..."></TextInput>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.w25}>
                        <Text style={styles.label}>Nhập lại</Text>
                    </View>
                    <View style={styles.w75}>
                        <TextInput style={styles.textInput} placeholder="Nhập lại mật khẩu của bạn..."></TextInput>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.w25}>
                        <Text style={styles.label}>Điện thoại</Text>
                    </View>
                    <View style={styles.w75}>
                        <TextInput style={styles.textInput} placeholder="Nhập điện thoại của bạn..."></TextInput>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.w50}>
                        <Button style={styles.btnPrimary} title="Đăng ký"></Button>
                    </View>
                    <View style={styles.w50}>
                        <Button style={styles.btnDanger} color="#e10000" title="Hủy bỏ"></Button>
                    </View>
                </View>
                <View style={styles.borderTop}>
                    <Image style={styles.logo} source={require("../../assets/img/icon.png")}></Image>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
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
    frmRegister:{
        flex:1,
        width:"100%",
        opacity:0.8,
        backgroundColor:"#fff",
        position:"absolute",
        height:"75%",
    },
    w25:{
        // flex:1,
        width:"30%",
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5,
        paddingRight:15,
    },
    w75:{
        // flex:1,
        width:"70%",
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5,
        paddingRight:15,
    },
    row:{
        flexDirection:"row",
        marginTop:15
    },
    label:{
        fontSize:18,
        marginTop:5,
        marginBottom:0,
        paddingBottom:0
    },
    textInput:{
        backgroundColor:"#FFF",
        color:"#d7d7d7",
        borderColor:"#0078ff",
        borderWidth:1,
        marginBottom:0,
        paddingLeft:15,
        borderRadius:5
    },
    textCenter:{
        textAlign:"center"
    },
    w50:{
        width:"50%",
        textAlign:"center",
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5,
        paddingRight:15,
    },
    btnPrimary:{
        color:"#0051ff",
        flex:1,
        marginTop:5,
        marginBottom:5,
        marginRight:15,
        marginLeft:15
    },
    btnDanger:{
        color:"#ff0000",
        flex:1,
        marginTop:5,
        marginBottom:5,
        marginRight:15,
        marginLeft:15
    },
    borderTop:{
        width:"100%",
        flex:1,
        borderTopColor:"#00f9ff",
        borderTopWidth:2,
        paddingTop:25,
        textAlign:"center"
    },
    logo:{
        height:75,
        
    }
  });
export default Register;