import React from 'react';

import Login from "./screens/auth/login"
import Register from "./screens/auth/signup"
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";
import store from "./services/store";
import axios from "axios";

axios.defaults.baseURL = 'https://thoughtflash.herokuapp.com/api/v1';

// axios.interceptors.request.use(config=>{
//   if(window.location.href !== '/api/v1/auth/verify-otp'){
//     return config
//   }
//   const tokenKey = localStorage.getItem('tokenKey')
//   if (tokenKey) {
//     let item = JSON.parse(tokenKey);
//     config.headers['x-access-token'] = item.token;
//   }
//   return config
// })



export default function App() {
  return (
    <Provider store={store}>
      <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Đăng nhập" />
        <Scene key="register" component={Register} title="Đăng kí tài khoản" />
      </Stack>
    </Router>
  </Provider>
  );
}
