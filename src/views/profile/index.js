import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Left, Body, Title, Content, Right, Button, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Ionicons name="md-menu" size={24} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Title>User Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{ textAlign: "center" }}>
            Sprinkle some user info right here o/
          </Text>
        </Content>
      </Container>
    );
  }
}
