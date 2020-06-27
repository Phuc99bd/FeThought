import React from 'react';

import Login from "./screens/auth/login"
import Register from "./screens/auth/signup"
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";
import store from "./services/store";
import axios from "axios";
import Forgot from "./screens/auth/forgot";
import Profile from "./screens/profile";
import Index from "./screens/index";
import ResetPassword from './screens/layouts/ResetPassword';
import HomePage from './components/main/homepage';
import CustomerSupport from './components/main/customersupport';
import Question from './components/main/question';
import Random from './components/main/random';
import Level from './components/main/level';


axios.defaults.baseURL = 'https://thoughtflash.herokuapp.com/api/v1';

export default function App() {
  return (
    
    <Provider store={store}>
      <Router>
      <Stack key="root">
        <Scene key="index" component={Index}/>
        <Scene key="login" component={Login} title="Đăng nhập" />
        <Scene key="register" component={Register} title="Đăng kí tài khoản" />
        <Scene key="forgot" component={Forgot} title="Quên mật khẩu"/>
        <Scene key="profile" component={Profile} title="Trang cá nhân"/>
        <Scene key="resetpassword" component={ResetPassword} title="Reset Mật khẩu"/>
        <Scene key="homepage" component={HomePage} title="Hồ sơ"></Scene>
        <Scene key="customersupport" component={CustomerSupport} title="Hỗ trợ khách hành"/>
        <Scene key="question" component={Question} title="Câu hỏi"/>
        <Scene key="random" component={Random} title="Random"/>
        <Scene key="level" component={Level} title="Chọn mức độ"/>
      </Stack>
    </Router>
  </Provider>
  );
}
