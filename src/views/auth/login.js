import React from "react";
import { AppRegistry, Alert, StyleSheet, View, Text, Image } from "react-native";
import { Container, Header, Content, Form, Item, Button, Input, Left, Right, Body, Toast, Title, Icon } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag;
    this.attributes = props.attributes;
    this.items = props.items;

    this.state = {
      username: "",
      password: "",
      showToast: false
    }

    this.validateLogin = this.validateLogin.bind(this);
    this.setUserCache = this.setUserCache.bind(this);

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  async setUserCache(username) {
    try {
      let savedData = await AsyncStorage.getItem(`@hospitalData_User-${username}`);
      if (savedData !== null) {
        await AsyncStorage.setItem("@hospitalUserSavedCache", savedData);
      } else {
        return;
      }
    } catch (e) {
      return;
    }
  }

  async validateLogin() {
    console.log("Logging in user...");
    try {
      let allSavedSignup = await AsyncStorage.getItem("@hospitalSavedSignup");
      if (allSavedSignup !== null) {
        let savedJSON = JSON.parse(allSavedSignup);
        for (let user_pass in savedJSON) {
          if (this.state.username === user_pass["email"] || this.state.username === user_pass["username"]) {
            console.log("Found the same user, validating password...");
            if (this.state.password === user_pass["password"]) {
              await this.setUserCache(user_pass["username"]);
              break;
            } else {
              alert("Wrong Password!");
              break;
            }
          }
        }
      } else {
        alert("Cannot find that user!");
      }
    } catch (e) {
      alert("Failed to contact server, please try again.")
    }
  }

  updateUsername(text) {
    this.setState({username: text});
  }

  updatePassword(text) {
    this.setState({password: text});
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Image source={{ uri: "https://i.imgur.com/RLXVE0k.png" }} style={sheets.logo} />
          <Text style={{ fontFamily: "Roboto_medium", marginTop: 20, marginBottom: 10, fontSize: 18, textAlign: "center" }}>Sign In</Text>
          <Form style={{ marginBottom: 20 }}>
            <Item>
              <Icon name='person' />
              <Input onChangeText={this.updateUsername} placeholder="Username/Email" />
            </Item>
            <Item last>
              <Icon name="key" />
              <Input secureTextEntry onChangeText={this.updatePassword} placeholder="Password" />
            </Item>
          </Form>
          <View style={{ marginBottom: 10 }}>
            <Button block rounded onPress={async () => this.validateLogin()}>
              <Text style={sheets.textCenter}>Sign In</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 10 }}> 
            <Button transparent style={{ alignSelf: "center" }}
              onPress={this.navigation.navigate("Reset Password")}>
              <Text style={{ color: "#349eeb" }}>Forgot your password?</Text>
            </Button>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20, flexDirection: "row", alignSelf: "center", alignContent: "center" }}>
            <Text style={{ color: "#000" }}>Don't have an account? </Text>
            <Text style={sheets.clickableCenterText} onPress={this.navigation.navigate("Sign Up")}>Register now!</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const sheets = StyleSheet.create({
  textArea: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "gray",
    height: 35,
    marginBottom: 10,
  },
  textCenter: {
    textAlign: "center",
    textAlignVertical: "center",
    flexWrap: "wrap",
    color: "#fff",
    fontSize: 18
  },
  logo: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
    height: 100,
    width: 100,
  },
  clickableCenterText: {
    color: "#359EEB",
    textAlignVertical:  "center",
    flexWrap: "wrap",
  }
})

export default function(props) {
  const navigation = useNavigation();
  return <AuthLogin {...props} navigation={navigation} />;
}