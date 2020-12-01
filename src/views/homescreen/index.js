import React from "react";
import HomeScreen from "./main.js";
import BookingScreenNav from "../booking";
import Profile from "../profile"

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

class HomeScreenRouter extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Booking" component={BookingScreenNav} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default HomeScreenRouter;
