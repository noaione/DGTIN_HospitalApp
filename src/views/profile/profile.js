import React from "react";
import { AppRegistry, Alert, Image, StyleSheet, View } from "react-native";
import { Container, Header, Left, Body, Title, Content, Right, Button, Text } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  async signOut() {
    await AsyncStorage.removeItem("@hospitalUserData");
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Image source={{ uri: this.props.loginInfo["profilePic"] }} style={ProfileSheets.roundImage} />
          <Text style={{ fontFamily: "Roboto_medium", paddingBottom: 10, fontSize: 18, textAlign: "center" }}>Login</Text>
          <View style={{ flex: 1, alignContent: "center" }}>
            <Text style={{ fontFamily: "Roboto_medium", fontSize: 16 }}>{this.props.loginInfo.patient_name}</Text>
            <Text style={{ fontFamily: "Roboto_medium", fontSize: 12, paddingBottom: 10 }}>{this.props.loginInfo.dob}</Text>
            <Button rounded dark onPress={async () => this.signOut()}><Text style={{textAlign: "center", color: "#fff"}}>Sign Out</Text></Button>
          </View>
        </Content>
      </Container>
    )
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag;
    this.attributes = props.attributes;
    this.items = props.items;
    this.state = {
      isLogin: false,
      email: null,
      username: null,
      patient_name: null,
      dob: null,
      address: null,
      profilePic: null,
    }
  }

  async componentDidMount() {
    console.log("Detecting login state...");
    try {
      let value = await AsyncStorage.getItem("@hospitalUserSavedCache");
      if (value !== null) {
        console.log("Login state found!");
        let jsonVal = JSON.parse(value);
        this.setState({isLogin: true});
        this.setState({email: jsonVal["email"]});
        this.setState({username: jsonVal["username"]});
        this.setState({patient_name: jsonVal["realname"]});
        this.setState({dob: jsonVal["dob"]});
        this.setState({address: jsonVal["address"]});
        this.setState({profilePic: jsonVal["profilePic"]});
      } else {
        console.log("Haven't sign in yet, redirecting...");
        this.props.navigation.navigate("Login");
      }
    } catch (e) {
      console.log("Cannot read login state, ignoring...");
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
          <UserInfo loginInfo={this.state} />
        </Content>
      </Container>
    );
  }
}

Profile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => navigation.openDrawer()}>
          <Ionicons name="md-menu" size={24} color="#fff" />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
})

const ProfileSheets = StyleSheet.create({
  roundImage: {
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  }
})

export default function(props) {
  const nav = useNavigation();
  return <Profile {...props} navigation={nav} />
}