import React from "react";
import { AppRegistry, Alert, StyleSheet, View, Text, Image } from "react-native";
import { Container, Header, Content, Form, Item, Button, Input, Left, Right, Body, Title, Icon } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

class AuthSignup extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag;
    this.attributes = props.attributes;
    this.items = props.items;

    this.state = {
      email: "",
      username: "",
      password: ""
    }

    this.registerNewUser = this.registerNewUser.bind(this);
  
    this.updateEmail = this.updateEmail.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  async registerNewUser() {
    console.log("Registering new account");
    // this.props.navigation.navigate("Profile", { screen: "Login" });
  }

  updateEmail(text) {
    this.setState({email: text});
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
          <Text style={{ fontFamily: "Roboto_medium", marginBottom: 10, fontSize: 18, textAlign: "center" }}>Sign Up</Text>
          <Form style={{ marginBottom: 20 }}>
            <Item>
              <Icon name='mail' />
              <Input onChangeText={this.updateEmail} placeholder="john.doe@example.com" />
            </Item>
            <Item>
              <Icon name='person' />
              <Input onChangeText={this.updateUsername} placeholder="Username" />
            </Item>
            <Item last>
            <Icon name="key" />
              <Input secureTextEntry onChangeText={this.updatePassword} placeholder="Password" />
            </Item>
          </Form>
          <View style={{ marginBottom: 10 }}>
            <Button block rounded onPress={async () => this.registerNewUser()}>
              <Text style={sheets.textCenter}>Sign Up</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 10, flexDirection: "row" }}>
            <Text style={sheets.textCenter}>Already registered? </Text>
            <Text style={sheets.clickableCenterText} onPress={this.props.navigation.navigate("Login")}>Sign In here!</Text>
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
    textAlign: "center",
    textAlignVertical:  "center",
    flexWrap: "wrap",
    textDecorationLine: "underline",
  }
})

export default function(props) {
  const nav = useNavigation();
  return <AuthSignup {...props} navigation={nav} />;
}