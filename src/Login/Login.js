import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from "react-native";

// import Toaster, { ToastStyles } from "react-native-toaster";

import auth from "@react-native-firebase/auth";

// const messages = [
//   { text: "◉‿◉ - Ok, you're alread to enter!", styles: ToastStyles.success },
//   {
//     text: "(ㄒoㄒ) - Oh no, we have a problem to login!",
//     styles: ToastStyles.error
//   }
// ];

export default class Login extends Component {
  state = { email: "", password: "", errorMessage: null };

  handleLogin = () => {
    const { email, password } = this.state;

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ message: messages[0] });
        this.props.navigation.navigate("Main");
      })
      .catch(error => {
        this.setState({ message: messages[1] });
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>(☉_☉)</Text>
        <Text>Hey, make login, NOW!</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "#F25F5C" }}>{this.state.errorMessage}</Text>
        )}

        <TextInput
          style={[styles.textInput, styles.textStyle]}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <TextInput
          secureTextEntry
          style={[styles.textInput, styles.textStyle]}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableOpacity onPress={this.handleLogin} style={styles.buttonStyle}>
          <Text>Login</Text>
        </TouchableOpacity>

        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />

        {/* <Toaster message={this.state.message} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  textStyle: {
    textAlign: "center",
    paddingRight: 12,
    paddingLeft: 12
  },

  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5
  },

  mainText: {
    fontSize: 24,
    fontWeight: "bold"
  },

  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFE066"
  }
});
