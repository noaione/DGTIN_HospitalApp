import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font'
import { Container, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';

import HomeScreen from "./src/views/homescreen";

import { expo as ExpoAppData } from "./app.json";
import AppLogo from "./assets/favicon.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    }
  }

  async componentDidMount() {
    console.log("Loading font...");
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    console.log("App ready!");
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <HomeScreen />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  logo: {
    marginBottom: 10,
  },
  textCenter: {
    textAlign: "center",
  },
})