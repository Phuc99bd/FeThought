import React from 'react';

import Login from "./screens/auth/login"
import Register from "./screens/auth/signup"
import { Router, Stack, Scene } from 'react-native-router-flux';

export default function App() {
  return (
    <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
    </Stack>
  </Router>
  );
}
