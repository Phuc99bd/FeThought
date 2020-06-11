import React from 'react';


import {Text , View ,StyleSheet, AppRegistry} from "react-native";
import Login from "./screens/auth/login"

export default function App() {
  return (
    <Login></Login>

  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

AppRegistry.registerComponent("MyApp",()=>App);