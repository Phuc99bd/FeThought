import React from 'react';

import Login from "./screens/auth/login"
import Register from "./screens/auth/signup"
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";
import store from "./services/store";

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
