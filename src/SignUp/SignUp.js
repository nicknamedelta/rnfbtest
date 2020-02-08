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
//   { text: "◉‿◉ - Okay, lets go!", styles: ToastStyles.success },
//   {
//     text: "(ㄒoㄒ) - Oh no, we have a problem to create your account!",
//     styles: ToastStyles.error
//   }
// ];

export default class SignUp extends Component {
  state = { email: "", password: "", errorMessage: null };

  handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // this.setState({ message: messages[0] });
        this.props.navigation.navigate("Main");
      })
      .catch(error => {
        // this.setState({ message: messages[1] });
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>ఠ_ఠ</Text>
        <Text>Hey, sign up!</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "#F25F5C" }}>{this.state.errorMessage}</Text>
        )}

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={[styles.textInput, styles.textStyle]}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={[styles.textInput, styles.textStyle]}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableOpacity
          onPress={this.handleSignUp}
          style={styles.buttonStyle}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
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
    borderColor: "#50514F",
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
