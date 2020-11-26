import React from "react";
import { Container, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default class BookingList extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <Title>Booking List</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{ textAlign: "center" }}>A placeholder is better than none, React is hard</Text>
        </Content>
      </Container>
    );
  }
}
