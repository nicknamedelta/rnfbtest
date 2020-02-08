import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import auth from "@react-native-firebase/auth";

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>ಠ◡ಠ</Text>
        <Text>"Wait one second... I'm loading now"</Text>
        <ActivityIndicator size="large" color="#da5c2f" style={styles.loader} />
      </View>
    );
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Main" : "SignUp");
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  loader: {
    padding: 10
  },

  textStyle: {
    fontSize: 24
  }
});
