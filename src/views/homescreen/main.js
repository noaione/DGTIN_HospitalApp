import React from "react";
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { expo as ExpoAppData } from "../../../app.json";

export default class HomeScreen extends React.Component {
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
            <Title>{ ExpoAppData.name }</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Welcome back!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Booking")}>
            <Text>Book a Doctor!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
