import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// import Toaster, { ToastStyles } from "react-native-toaster";

import auth from "@react-native-firebase/auth";

// const messages = [
//   { text: "◉‿◉ - Go out!", styles: ToastStyles.success },
//   {
//     text: "(ㄒoㄒ) - Oh no, we have a problem to sign out!",
//     styles: ToastStyles.error
//   }
// ];

export default class Main extends Component {
  state = { currentUser: null };

  handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        // this.setState({ message: messages[0] });
        this.props.navigation.navigate("Login");
      })
      .catch(error => {
        // this.setState({ message: messages[1] });
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    const { currentUser } = this.state;

    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>

        {this.state.errorMessage && (
          <Text style={{ color: "#F25F5C" }}>{this.state.errorMessage}</Text>
        )}

        <TouchableOpacity
          onPress={this.handleSignOut}
          style={styles.buttonStyle}
        >
          <Text>Sign Out</Text>
        </TouchableOpacity>

        {/* <Toaster message={this.state.message} /> */}
      </View>
    );
  }

  componentDidMount() {
    const { currentUser } = auth();
    this.setState({ currentUser });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: "#FF0000"
  }
});
