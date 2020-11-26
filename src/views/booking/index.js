import React from "react";

import Doctors from "./doctors";
import BookingList from "./booklist";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BookingTab = createBottomTabNavigator();

export default function BookingScreenNav() {
  return (
    <BookingTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Book Doctor") {
            iconName = focused ? "briefcase-plus" : "briefcase-plus-outline";
          } else if (route.name === "Booking List") {
            iconName = focused ? "calendar-month" : "calendar-month-outline";
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
      >
      <BookingTab.Screen name="Book Doctor" component={Doctors}/>
      <BookingTab.Screen name="Booking List" component={BookingList} />
    </BookingTab.Navigator>
  )
}
