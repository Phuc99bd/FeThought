import axios from "axios";

import {
    AUTH_ACTIVE_ACCOUNT,
    AUTH_AUTHENTION_COMPLETED,
    AUTH_FORGOT_NEW,
    AUTH_FORGOT_SUCCESS,
    AUTH_LOGIN_COMPLETED,
    REGISTER_COMPLETED,
    AUTH_AUTHENTION_FAIL
} from "./actionType";
let baseURL = `https://thoughtflash.herokuapp.com/api/v1`;
import { AsyncStorage } from "react-native";

// check login with email ,password 
export const LoginRequest = (email , password)=>{
    return async dispatch=>{

        fetch(`${baseURL}/auth/login`,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
        .then(async(response)=>{
            let data= await response.json();
            // check case set state gobal
            switch(response.status){
                case 404:                    
                    dispatch({type:AUTH_AUTHENTION_FAIL ,error: data.data , message: data.message });
                    break;
                case 200:        
                    data = data.data;
                    dispatch({ type: AUTH_LOGIN_COMPLETED, email: data.email });
                    break;
                default:
                    break;
            }
        })
        .catch((error) => {
        }); 
    }
}

export const AuthentionRequest = (email,otp)=>{
    return async dispatch => {
        fetch(`${baseURL}/auth/verify-otp?email=${email}&otp=${otp}`,{
            method: "GET"
        })
        .then(async (response)=>{
            let data = await response.json();
            // check case set state gobal
            switch(response.status){
                case 404:
                    dispatch({type:AUTH_AUTHENTION_FAIL ,error: data.data , message: data.message });
                    break;
                case 200:        
                    data = data.data;
                    AsyncStorage.setItem("user",data.user);
                    dispatch({ type: AUTH_AUTHENTION_COMPLETED });
                    break;
                default:
                    break;
            }
        })
    }
}

export const SendOTP = (email)=>{
    // send OTP
    fetch(`${baseURL}/auth/get-otp?email=${email}&type=login`).then(async res=>{
    })
}