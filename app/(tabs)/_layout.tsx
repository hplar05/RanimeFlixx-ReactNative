import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="television-classic"
              color={color}
              size={30}
            />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search Anime",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={25} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="topairing"
        options={{
          tabBarLabel: "Top Airing",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="trophy-award"
              color={color}
              size={30}
            />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={30} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </Tabs>
  );
};

export default Layout;
