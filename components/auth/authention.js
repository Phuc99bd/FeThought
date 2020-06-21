import React, { Component } from "react";
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
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typing_email: false,
        typing_password: false,
        animation_login: new Animated.Value(width - 40),
        enable: true,
    };
  }
  _foucus(value) {
    if (value == "otp") {
      this.setState({
        typing_email: true,
        typing_password: false,
      });
    }
  }
  _animation() {
    Animated.timing(this.state.animation_login, {
      toValue: 40,
      duration: 250,
    }).start();

    setTimeout(() => {
      this.setState({
        enable: false,
        typing_email: false,
        typing_password: false,
      });
    }, 150);
   
  }
  _typing() {
    return <TypingAnimation dotColor="#93278f" style={{ marginRight: 25 }} />;
  }
  render() {
    const width = this.state.animation_login;

    return (
        <View style={styles.footer}>
          <Text
            style={[
              styles.title,
              {
                marginTop: 50,
              },
            ]}
          >
            Mã OTP
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="My OTP"
              style={styles.textInput}
              onFocus={() => this._foucus("otp")}
            />
            {this.state.typing_email ? this._typing() : null}
          </View>
          <View style={styles.action,{margin: 20}}>
            <Button title="Send OTP again" style={styles.textLogin}/>
          </View>
          <TouchableOpacity onPress={() => this._animation()}>
            <View style={styles.button_container}>
              <Animated.View
                style={[
                  styles.animation,
                  {
                    width,
                  },
                ]}
              >
                {this.state.enable ? (
                  <Text style={styles.textLogin}>Xác nhận</Text>
                ) : (
                  <Animatable.View animation="bounceIn" delay={50}>
                    <FontAwesome name="check" color="white" size={20} />
                  </Animatable.View>
                )}
              </Animated.View>
            </View>
          </TouchableOpacity>

        </View>
    );
  }
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 2,
    padding: 20,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: "gray",
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    backgroundColor: "#93278f",
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
