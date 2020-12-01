import React from "react";
import { AppRegistry, Alert, StyleSheet, View, Text, Image } from "react-native";
import { Container, Header, Content, Form, Item, Button, Input, Left, Right, Body, Toast, Title, Icon } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

class AuthPasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag;
    this.attributes = props.attributes;
    this.items = props.items;

    // this.state = {
    //   username: "",
    //   password: "",
    //   showToast: false
    // }
    // this.validateLogin = this.validateLogin.bind(this);
    // this.updateUsername = this.updateUsername.bind(this);
    // this.updatePassword = this.updatePassword.bind(this);
    // this.setUserCache = this.setUserCache.bind(this);
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Image source={{ uri: "https://i.imgur.com/RLXVE0k.png" }} style={sheets.logo} />
          <Text style={{ fontFamily: "Roboto_medium", marginTop: 20, marginBottom: 10, fontSize: 18, textAlign: "center" }}>Not Implemented</Text>
          <View style={{ marginBottom: 10 }}>
            <Button block rounded onPress={this.props.navigation.navigate("Login")}>
              <Text style={sheets.textCenter}>Go back</Text>
            </Button>
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
  return <AuthPasswordReset {...props} navigation={navigation} />;
}